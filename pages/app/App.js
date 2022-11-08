import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

import styles from "./App.module.scss";
import Timeline from "../../components/Timeline";
import SidePanel from "../../components/SidePanel";
import {
  filterMedia,
  getFieldOptions,
  getDurationDays,
  DURATION_TYPES,
} from "../../utils/media";
import { FilterContext } from "../../contexts";
import { FILTER_TYPES } from "../../components/Table/util";

const App = ({ media }) => {
  const router = useRouter();

  const [nameSearch, setNameSearch] = useState("");
  // const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [durationFilterNumber, setDurationFilterNumber] = useState(0);
  const [durationFilterType, setDurationFilterType] = useState(
    DURATION_TYPES.NONE
  );

  console.log("durationFilterType");
  console.log(durationFilterType);

  const durationFilterNumberInt = parseInt(durationFilterNumber);

  useEffect(async () => {
    const session = await getSession();
    if (!session) {
      router.push("/");
    }
  }, [router]);

  const filters = useMemo(
    () => [
      {
        type: FILTER_TYPES.SEARCH,
        field: "name",
        value: nameSearch,
      },
      {
        type: FILTER_TYPES.SELECT,
        field: "type",
        value: typeFilters,
      },
      {
        type: FILTER_TYPES.CUSTOM,
        value: typeFilters,
        filterMethod: (row) => {
          const duration = getDurationDays(row);
          switch (durationFilterType) {
            case DURATION_TYPES.GREATER_THAN:
              return duration > durationFilterNumberInt;
            case DURATION_TYPES.GREATER_THAN_OR_EQUAL:
              return duration >= durationFilterNumberInt;
            case DURATION_TYPES.LESS_THAN:
              return duration < durationFilterNumberInt;
            case DURATION_TYPES.LESS_THAN:
              return duration <= durationFilterNumberInt;
            case DURATION_TYPES.EQUAL:
              return duration === durationFilterNumberInt;
            default:
              return true;
          }
        },
      },
    ],
    [nameSearch, typeFilters, durationFilterNumber, durationFilterType]
  );

  const mappedMedia = media.map((item) => {
    const sortedMappedNodes = (item.nodes || [])
      .map((node) => ({
        ...node,
        startTime: new Date(node.startTime),
        endTime: node.endTime ? new Date(node.endTime) : new Date(),
      }))
      .sort((a, b) => (a.startTime > b.startTime ? 1 : -1));

    const startTime = item.startTime
      ? new Date(item.startTime)
      : sortedMappedNodes[0].startTime;

    const endTime = sortedMappedNodes[0]
      ? sortedMappedNodes[sortedMappedNodes.length - 1].endTime
      : !item.startTime
      ? null
      : item.endTime
      ? new Date(item.endTime)
      : new Date();

    return {
      ...item,
      startTime,
      endTime,
      inProgress: !item.nodes && !item.endTime,
      nodes: sortedMappedNodes,
      // duration: sortedMappedNodes[0]
      //   ? sortedMappedNodes.reduce(
      //       (acc, node) => acc + getDurationDays(node),
      //       0
      //     )
      //   : getDurationDays({
      //       startTime,
      //       endTime,
      //     }),
    };
  });

  const filteredMedia = filterMedia(mappedMedia, filters);

  const timelineStartTime = filteredMedia.reduce(
    (acc, item) => (item.startTime < acc ? item.startTime : acc),
    new Date()
  );

  // const sortedMedia = [...mappedMedia].sort((a, b) =>
  //   a.duration < b.duration ? 1 : -1
  // );

  const sortedTimelineMedia = [...filteredMedia].sort((a, b) =>
    a.startTime > b.startTime ? 1 : -1
  );

  const filterOptions = getFieldOptions(media, ["type"]);

  const selectFilters = useMemo(
    () => [
      {
        key: 3242653,
        placeholder: "Type",
        options: filterOptions.type,
        updateFilterValues: (options) =>
          setTypeFilters(options.map((opt) => opt.value)),
      },
    ],
    [filterOptions]
  );

  return (
    <div className={styles.container}>
      <FilterContext.Provider
        value={{
          nameSearch,
          setNameSearch,
          filters,
          selectFilters,
          durationFilterNumber,
          setDurationFilterNumber,
          durationFilterType,
          setDurationFilterType,
        }}
      >
        <SidePanel media={mappedMedia} />
        <div className={styles.content}>
          <Timeline startTime={timelineStartTime} endTime={new Date()}>
            {sortedTimelineMedia.map((item) => (
              <Timeline.Row key={item._id} media={item} />
            ))}
          </Timeline>
        </div>
      </FilterContext.Provider>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || !session.user) {
    return {
      props: {
        media: [],
      },
    };
  }

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_HOST}/api/media/${session.user.id}`
  );

  return {
    props: {
      session,
      media: response?.data || [],
    },
  };
}

export default App;
