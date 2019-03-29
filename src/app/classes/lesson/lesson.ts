//ultimately would like to fill a global array of lesson
//objects from a json file containing all the information
//that the lesson contains
export class Lesson {
  id: number;
  title: string;
  body: string;
  sources: string[];
  parts: Lesson[];
  //need a text section, but would need to identify formatting
  //and such so it looks good on the page
}
