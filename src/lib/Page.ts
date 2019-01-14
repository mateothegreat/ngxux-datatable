export class Page {

    public limit: number = 0;
    public count: number = 0;
    public totalPages: number = 0;
    public offset: number = 0;
    public sort: string = 'id';

    public toString(): string {

        const arr: string[] = [];

        arr.push(`page=${this.offset}`);
        arr.push(`size=${this.limit}`);
        arr.push(`sort=${this.sort}`);

        return arr.join('&');

    }

}
