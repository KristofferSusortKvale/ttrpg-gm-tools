interface Segment {
  title: string | number | undefined;
  value: number;
  color: string;
}

export class Watch {
  num_segments: number;
  segments: Segment[];
  text: string;

  constructor(num_segments: number, text: string) {
    this.num_segments = num_segments;
    let initSegments: Segment[] = [];
    for (let i=0; i<num_segments; i++) {
      initSegments.push({
        title: i.toString(),
        value: 1,
        color: '#B7C3F3' // light color
      })
    }
    this.segments = initSegments;
    this.text = text;
  }

  clickedSegment(index: number) {
    if (this.segments[index].color === '#B7C3F3') {
      this.segments[index].color = '#397367';
    } else if (this.segments[index].color === '#397367') {
      this.segments[index].color = '#bb0A21';
    } else {
      this.segments[index].color = '#B7C3F3';
    }
  }
}
