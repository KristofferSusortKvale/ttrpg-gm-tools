export class Note {
  title: string;
  text?: string;

  constructor(title: string, text?: string, img?: string) {
    this.title = title;
    this.text = text;
  }
}
