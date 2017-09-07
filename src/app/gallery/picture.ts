
export class Picture {
  constructor(private _fileName: string, private _title?: string, private _altTitle?: string){}

  get fileName() {
    return this._fileName;
  }
  get title() {
    return this._title;
  }
  get altTitle() {
    return this._altTitle;
  }
}