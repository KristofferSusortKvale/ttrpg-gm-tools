import { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { PieChart } from 'react-minimal-pie-chart';
import { Watch } from '../../models/Watch';
import './WatchWrapper.css';


export const WatchWrapper = () => {
  const [watchList, setWatchList] = useState<Watch[]>([]);
  const [segments, setSegments] = useState(5);
  const [watchText, setWatchText] = useState("");

  const plus_watch = (segments: number) => {
    let newWatchList: Watch[] = [];
    for (const watch of watchList) {
      newWatchList.push(watch);
    }
    newWatchList.push(new Watch(segments, watchText));
    setWatchList(newWatchList);
  }

  const minus_watch = (watch: Watch) => {
    setWatchList(watchList.filter((it) => it !== watch));
  }

  const handleClickPieChart = (watch: Watch, clickedSegment: number) => {
    let newWatchList: Watch[] = [];
    for (const w of watchList) {
      if (w === watch) {
        w.clickedSegment(clickedSegment);
      }
      newWatchList.push(w);
    }
    setWatchList(newWatchList);
  }

  const remove_all_watches = () => {
    setWatchList([]);
  }

  return (
    <div className="WatchWrapper">
      <h1>Watches</h1>
      <div className="WatchContent">
        <div className="Controls">
          <div className="Input">
            <Form.Label>Number of Segments: {segments}</Form.Label>
            <Form.Range
              defaultValue={segments}
              onChange={(e) => {
                setSegments(Number.parseInt(e.target.value));
              }}
              min={1}
              max={10}
            />
          </div>
          <div className="Input">
            <Form.Label>Explanation</Form.Label>
            <Form.Control onChange={(e) => {
              setWatchText(e.target.value);
            }}
            />
          </div>
          <Button
            onClick={() => {plus_watch(segments)}}
            size="lg"
          >
            Add Watch
          </Button>
          <Button
            onClick={remove_all_watches}
            size="lg"
          >
            Remove all
          </Button>
        </div>
        <div className="Watches">
          {watchList.map((watch, i) => {
            return (
              <Alert
                className="WatchAlert"
                key={i}
                variant="primary"
                onClose={() => minus_watch(watch)}
                dismissible
              >
                <text>{watch.text}</text>
                <PieChart
                  data={watch.segments}
                  segmentsShift={1}
                  radius={47}
                  onClick={(e, i) => {
                    handleClickPieChart(watch, i);
                  }}
                />
              </Alert>
          )})}
        </div>
        <hr />
      </div>
    </div>
  )
}
