import React, { FC, useEffect, useState } from 'react';
import './Watch.css';
import { PieChart } from 'react-minimal-pie-chart';

interface WatchProps {
  segments: number;
}

interface Segment {
  title: string | number | undefined;
  value: number;
  color: string;
}

export const Watch: FC<WatchProps> = ({segments}) => {
  const [segmentsList, setSegmentsList] = useState<Segment[]>([]);

  useEffect(() => {
    let initialSegmentsList = [];
    for (let i = 0; i < segments; i++) {
      initialSegmentsList.push({
        title: i.toString(),
        value: 1,
        color: '#B7C3F3' // light color
      })
    }
    setSegmentsList(initialSegmentsList);
  }, [])

  const clickedSegment = (index: number) => {
    let newSegmentsList = [];
    for (let i = 0; i < segmentsList.length; i++) {
      if (i === index) {
        if (segmentsList[i].color === '#B7C3F3') {
          newSegmentsList.push({
            title: segmentsList[i].title,
            value: segmentsList[i].value,
            color: '#397367'
          })
        } else if (segmentsList[i].color === '#397367') {
          newSegmentsList.push({
            title: segmentsList[i].title,
            value: segmentsList[i].value,
            color: '#bb0A21'
          })
        } else {
          newSegmentsList.push({
            title: segmentsList[i].title,
            value: segmentsList[i].value,
            color: '#B7C3F3'
          })
        }
      } else {
        newSegmentsList.push(segmentsList[i]);
      }
      setSegmentsList(newSegmentsList);
    }
  }

  return (
    <div className="Watch">
      <PieChart
        data={segmentsList}
        segmentsShift={1}
        radius={48}
        onClick={(e, i) => {
          clickedSegment(i)
        }}
      />
    </div>
  )
}
