import { throttle } from "lodash";

let lastId = Infinity;

const infiniteScroll = throttle(async () => {}, 400);

export default infiniteScroll;
