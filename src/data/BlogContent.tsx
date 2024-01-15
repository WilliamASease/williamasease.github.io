export type BlogPost = {
  year: number;
  month: string;
  day: number;
  title: string;
  paragraphs: string[];
};

// eslint-disable-next-line
const AnimationTest: BlogPost = {
  year: 0,
  month: "Jan",
  day: 0,
  title: "Animation Test",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui eu libero pharetra pellentesque et egestas massa. Aenean consequat finibus enim, at ultrices diam vulputate at. Integer porttitor porttitor leo, at euismod arcu euismod eu. Maecenas facilisis purus maximus, pharetra lorem sed, fermentum ligula. Duis luctus lectus non sem volutpat fermentum. Curabitur condimentum vestibulum lectus ac pulvinar. Quisque aliquet aliquam tellus, ut accumsan metus porta auctor. Sed blandit nisi bibendum ligula maximus, in pulvinar dolor euismod. Etiam gravida orci justo, vel laoreet nisl suscipit vel. Mauris bibendum diam a magna venenatis, sit amet varius tortor scelerisque. Cras ac cursus tortor, euismod imperdiet nibh. Sed pellentesque dui in tempor dictum. Nunc iaculis egestas est nec consectetur.",
    "Mauris quis volutpat purus. Donec vulputate odio vitae justo aliquet lacinia. Pellentesque egestas metus et leo porttitor sagittis. Nunc volutpat libero non tincidunt finibus. Nam id dolor quam. Nulla eleifend ex quis consequat malesuada. Vestibulum pellentesque velit at augue dictum, a consectetur elit lobortis. Sed leo ante, dapibus vitae nibh a, aliquet tincidunt lorem. Maecenas bibendum, diam vitae rutrum porttitor, lorem magna interdum nulla, eu posuere massa neque sed odio. Curabitur nec augue tincidunt, sollicitudin lacus in, commodo lectus.",
    "Sed lorem odio, iaculis vitae eros a, porta molestie sem. Sed tempus quis ex eu vehicula. Nullam tempor sagittis magna, vel faucibus ex semper sit amet. Ut eu felis sit amet ipsum facilisis sagittis eget vel leo. Ut convallis mauris justo, in volutpat nisi auctor vel. Fusce mi nisi, scelerisque id tellus a, molestie egestas nisl. Sed nec sollicitudin nisi. Vivamus pretium nulla a tortor posuere mollis. Nulla ut ultricies nisi. Maecenas a justo rutrum justo rhoncus vestibulum ac vitae orci. Aenean gravida nisl eget leo bibendum accumsan. Sed dictum faucibus augue vel elementum. Nullam viverra ligula in laoreet fringilla. Vivamus consectetur vitae lectus non mollis.",
    "Nulla volutpat, nunc vitae tristique vulputate, eros metus mattis ex, sed vulputate dui purus in lectus. Nulla felis nunc, viverra quis enim eu, imperdiet ultricies tortor. Nam luctus dapibus urna vitae posuere. Suspendisse ac orci fermentum mauris efficitur finibus ut eu mi. Donec velit est, vulputate vel accumsan vel, dignissim sed dui. Donec id varius magna. Quisque hendrerit egestas nibh eget dignissim. Aliquam erat volutpat. Ut pulvinar massa at eros dignissim, venenatis facilisis massa ultrices.",
    "Suspendisse potenti. Donec mollis pharetra nulla eget tristique. Proin vitae erat lacus. Ut vehicula eros eu dictum interdum. Donec consequat nisi sed ornare congue. Sed gravida erat eros, eu convallis augue lacinia ac. Maecenas et pulvinar ante. Mauris dignissim dolor ac lacus rutrum, eu sagittis metus vestibulum. Maecenas cursus dolor sed blandit volutpat.",
  ],
};

export const useBlogPosts: (debug?: boolean) => BlogPost[] = (
  debug?: boolean
) => [
  ...(debug
    ? [
        {
          year: 0,
          month: "Jan",
          day: 0,
          title: "Animation Test",
          paragraphs: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et dui eu libero pharetra pellentesque et egestas massa. Aenean consequat finibus enim, at ultrices diam vulputate at. Integer porttitor porttitor leo, at euismod arcu euismod eu. Maecenas facilisis purus maximus, pharetra lorem sed, fermentum ligula. Duis luctus lectus non sem volutpat fermentum. Curabitur condimentum vestibulum lectus ac pulvinar. Quisque aliquet aliquam tellus, ut accumsan metus porta auctor. Sed blandit nisi bibendum ligula maximus, in pulvinar dolor euismod. Etiam gravida orci justo, vel laoreet nisl suscipit vel. Mauris bibendum diam a magna venenatis, sit amet varius tortor scelerisque. Cras ac cursus tortor, euismod imperdiet nibh. Sed pellentesque dui in tempor dictum. Nunc iaculis egestas est nec consectetur.",
            "Mauris quis volutpat purus. Donec vulputate odio vitae justo aliquet lacinia. Pellentesque egestas metus et leo porttitor sagittis. Nunc volutpat libero non tincidunt finibus. Nam id dolor quam. Nulla eleifend ex quis consequat malesuada. Vestibulum pellentesque velit at augue dictum, a consectetur elit lobortis. Sed leo ante, dapibus vitae nibh a, aliquet tincidunt lorem. Maecenas bibendum, diam vitae rutrum porttitor, lorem magna interdum nulla, eu posuere massa neque sed odio. Curabitur nec augue tincidunt, sollicitudin lacus in, commodo lectus.",
            "Sed lorem odio, iaculis vitae eros a, porta molestie sem. Sed tempus quis ex eu vehicula. Nullam tempor sagittis magna, vel faucibus ex semper sit amet. Ut eu felis sit amet ipsum facilisis sagittis eget vel leo. Ut convallis mauris justo, in volutpat nisi auctor vel. Fusce mi nisi, scelerisque id tellus a, molestie egestas nisl. Sed nec sollicitudin nisi. Vivamus pretium nulla a tortor posuere mollis. Nulla ut ultricies nisi. Maecenas a justo rutrum justo rhoncus vestibulum ac vitae orci. Aenean gravida nisl eget leo bibendum accumsan. Sed dictum faucibus augue vel elementum. Nullam viverra ligula in laoreet fringilla. Vivamus consectetur vitae lectus non mollis.",
            "Nulla volutpat, nunc vitae tristique vulputate, eros metus mattis ex, sed vulputate dui purus in lectus. Nulla felis nunc, viverra quis enim eu, imperdiet ultricies tortor. Nam luctus dapibus urna vitae posuere. Suspendisse ac orci fermentum mauris efficitur finibus ut eu mi. Donec velit est, vulputate vel accumsan vel, dignissim sed dui. Donec id varius magna. Quisque hendrerit egestas nibh eget dignissim. Aliquam erat volutpat. Ut pulvinar massa at eros dignissim, venenatis facilisis massa ultrices.",
            "Suspendisse potenti. Donec mollis pharetra nulla eget tristique. Proin vitae erat lacus. Ut vehicula eros eu dictum interdum. Donec consequat nisi sed ornare congue. Sed gravida erat eros, eu convallis augue lacinia ac. Maecenas et pulvinar ante. Mauris dignissim dolor ac lacus rutrum, eu sagittis metus vestibulum. Maecenas cursus dolor sed blandit volutpat.",
          ],
        },
      ]
    : []),
  {
    year: 2023,
    month: "Dec",
    day: 28,
    title: "Welcome",
    paragraphs: [
      "Welcome to WilliamASease.github.io 3.0! Please stay tuned for anything I'm set to reveal here.",
    ],
  },
  {
    year: 2024,
    month: "Jan",
    day: 14,
    title: "Spotify95 in a usable state",
    paragraphs: [
      "Spotify 0.3.0 is out. It's finally in a position where it feels pleasant and stable to use.",
      "Give it a try if you like.",
    ],
  },
];
