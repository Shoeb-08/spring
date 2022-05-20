import Book1 from "../images/gallery1.svg";
import Book2 from "../images/coverImages/employee.svg";
import Book3 from "../images/coverImages/doesntHurtToAsk.svg";
import Book4 from "../images/coverImages/theFateOfFood.svg";
import Book5 from "../images/coverImages/livesOfStoics.svg";
import Book6 from "../images/coverImages/lovingYourBusiness.svg";
import Book7 from "../images/coverImages/theLonelyCentury.svg";
import Book8 from "../images/coverImages/eatBetterFeelBetter.svg";
import Book9 from "../images/coverImages/dropshipping.svg";
import Book10 from "../images/coverImages/beyondEntrepreneurship.svg";
import Book11 from "../images/coverImages/beingBoss.svg";

const Library = [
  {
    id: 1,
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    time: "13-minute read",
    read: "1.9k reads",
    image: Book1,
    state: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: true,
    },
  },
  {
    id: 2,
    title: "Employee to Entrepreneur",
    author: "Steve Glaveski",
    time: "15-minute read",
    read: "",
    image: Book2,
    state: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 3,
    title: "Doesn't Hurt to Ask",
    author: "Trey Gowdy",
    time: "13-minute read",
    read: "1.9k reads",
    image: Book3,
    state: {
      isFinished: false,
      isTrending: false,
      justAdded: false,
      isFeatured: true,
    },
  },
  {
    id: 4,
    title: "The Fate of Food",
    author: "Amanda Little",
    time: "12-minute read",
    read: "16k reads",
    image: Book4,
    state: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 5,
    title: "Lives of the Stoics",
    author: "Ryan Holiday, Stephen Hansel",
    time: "13-minute read",
    read: "",
    image: Book5,
    state: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 6,
    title: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    read: "",
    image: Book6,
    state: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
  {
    id: 7,
    title: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    read: "",
    image: Book7,
    state: {
      isFinished: false,
      isTrending: false,
      justAdded: true,
      isFeatured: false,
    },
  },
  {
    id: 8,
    title: "Eat Better,Feel Better",
    author: "Giada De Laurentiis",
    time: "13-minute read",
    read: "1.9k reads",
    image: Book8,
    state: {
      isFinished: false,
      isTrending: false,
      justAdded: true,
      isFeatured: false,
    },
  },
  {
    id: 9,
    title: "Dropshipping",
    author: "James Moore",
    time: "12-minute read",
    read: "",
    image: Book9,
    state: {
      isFinished: false,
      isTrending: false,
      justAdded: true,
      isFeatured: false,
    },
  },
  {
    id: 10,
    title: "Beyond Entrepreneurship",
    author: "Jim Collins & Bill Lazier",
    time: "13-minute read",
    read: "1.9k reads",
    image: Book10,
    state: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: true,
    },
  },
  {
    id: 11,
    title: "Being Boss",
    author: "Kathleen Shannon land Emily...",
    time: "13-minute read",
    read: "",
    image: Book11,
    state: {
      isFinished: false,
      isTrending: true,
      justAdded: false,
      isFeatured: false,
    },
  },
];

export default Library;
