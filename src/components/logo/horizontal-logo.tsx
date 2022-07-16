import * as React from "react";

import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";

// https://react-svgr.com/playground/
export const HorizontalLogo: React.FC<BoxProps> = (props) => {
  return (
    <Box
      alignSelf="center"
      as="svg"
      fill={useColorModeValue("brand.500", "brand.900")}
      viewBox="0 0 808 246"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>{".prefix__cls-1{fill:none}"}</style>
      </defs>
      <g data-name="Layer 2" id="prefix__Layer_2">
        <g data-name="Layer 1" id="prefix__Layer_1-2">
          <path
            className="prefix__cls-1"
            d="M719 0h89v246H0V0h562l-9.83 16.34c4.17-3.27 5.81-1.84 6.26 1.87a49.47 49.47 0 01.44 5.95v64c0 6.18.8 12.64-7.54 16.52 16.65 0 31.66.23 46.65-.15 4.18-.1 8.32-2 11.89-2.91 3.13 1 6.28 2.89 9.44 2.92 19.5.17 39-.06 58.49-.21 10.77-.08 13.91-3.28 14-14.11q.08-14 .05-28c0-2.92.22-5.31 4.28-2.78-2.9-10.3-7.85-14.3-17.54-14.5-5-.11-10 0-15-.08-6.4-.07-12.94-.6-16.41 5-2.88-4.75-5.7-9.42-8.9-14.71-4.31 6.56-7.81 11.89-11.66 17.73 5.21-2.33 7-1.15 7.25 4.83.3 9 .15 18 .15 27 0 16.26 0 16.21-16.16 15.39-3.3-.17-5.43-1.42-6-4.76a48.71 48.71 0 01-.89-7.39c-.11-9.83 0-19.67-.07-29.5 0-6.58-3.2-11.52-8.12-16L592 59c5.26-1.83 7-.75 7 4.6.14 9.5-.07 19 .12 28.5.08 4.3-2 7.11-5.82 7.35-7.71.47-15.47.14-23.53.14v-6c0-22.17-.18-44.34.08-66.51C570 17.3 570.05 7.8 563 0h155l-9.51 16.1c3.95-3.13 5.49-1.27 6.2 1.71a24.16 24.16 0 01.37 5.46v65c0 6.08.84 12.4-6.32 16 11.82.37 23 .43 34.12.35 6.33 0 12.67 0 19-.58 5.73-.51 8.06-3.18 8.11-8.74.13-12.84.11-25.67 0-38.51 0-6.05-3.48-10.31-7.84-14.42l-10.7 16.37c5.31-1.49 6.58-.81 6.69 4 .23 9.83.19 19.67.33 29.5.06 4.2-2.08 7.06-6 7.24-8.73.4-17.49.12-26.58.12v-6.06c0-23.34-.27-46.68.14-70 .16-8.83-1.1-16.76-7.01-23.54zm87.94 143H473.45c-1.5 0-3-.11-4.5 0-3 .25-3.62-1.13-4.23-4-2.05-9.56-3.47-19.52-7.32-28.36C439.45 69.43 398.69 47.1 354 53.12c-41.33 5.57-76.77 41.93-81 83.43-.51 5-2 6.53-7.19 6.52q-129.18-.25-258.42-.07h-6v9.16h270.44c3.84 55.62 44.67 88 84 92.67 23.46 2.8 45.88-1.25 65.82-14.85 27.37-18.66 41.83-44.76 43.84-78.13h341.44zM99.12 45L85.46 56.64C90.75 56.13 91 59 91 62.25c0 16-.07 32 0 48 0 5.63.25 11.17-6.88 13.61 4.84-.79 9.47-1.67 13.25-4 8.11-4.91 2.76-13.82 5.06-20.17 3.93.33 7.67.9 11.42.92 19.84.09 39.67 0 59.51.07 5.51 0 10.35-.78 12-7.73l8.67 7.9 7-4.67c3 1.8 5.14 4 7.48 4.26a65 65 0 0013.94-.18c6.94-.69 9.28-3.47 9.29-10.4 0-24 0-48 .05-72 0-6.45-3-11.3-7.58-15.78-3.43 5.19-6.67 10.13-10.15 15.41 5.06-1.6 6.67-.47 6.71 5.14q.19 33.26 0 66.51c0 5.72-2.51 7.13-10.7 6.94-5.1-.11-6.4-1.55-6.42-7.24 0-8 .15-16 0-24-.11-4.75-1-9.46-5.38-12.3-4.52-3-9.3-5.51-13.2-7.8l-11.9 14c0 .52 1.45 3 1.54 5.6.31 8.82.15 17.67.14 26.5 0 3.66-1.66 5.42-5.54 5.33-7.5-.17-15-.35-22.5.07-4.45.25-7.54-1.24-9.31-5a25.54 25.54 0 01-2.64-8.88c-.4-6.31-.15-12.66-.12-19 0-5.2 3-7.43 8-5.67 1.86.66 3.41 2.2 5.54 3.63-.11-6.5 3.92-9.93 9.34-12.62 1.67-.84 2.5-3.38 4.13-5.74-3.87 1.41-6.41 2.85-9.09 3.19a143.62 143.62 0 01-15.39.9c-9.12.18-17.76 7.13-20 16.3 4.7-2.79 5.53-2.49 5.94 2.89.35 4.48.23 9 .26 13.49 0 5.75-.69 11.71 6.35 16.42-8 0-14.27-.24-20.52.08-4.35.22-6.08-1.87-6.57-5.67a62.31 62.31 0 01-.63-7c-.14-9 0-18-.38-27-.13-3.45-1.5-6.88-2.6-11.56zM8.88 233.85c0-11.58-.07-22.71 0-33.84.08-10.26 5.9-16.15 15.65-16.11 9.17 0 13.81 5.15 13.94 15.66.12 9.66 0 19.33 0 29 0 1.75.22 3.5.33 5.08h7.52c.07-1.52.17-2.67.18-3.81 0-10.33-.07-20.67 0-31 .06-4.8 1.26-9.27 5.63-12.12a16.29 16.29 0 0116.63-1.25c5.77 2.67 7.29 7.78 7.28 13.65v34.52h7.6c0-13.54.55-26.71-.18-39.8-.57-10.4-8.41-16.33-18.88-16.77-8.35-.34-15.14 2.29-20.38 8.82-8.54-11.35-20.81-11.88-35.35-1.64l-.6-6.55h-6.5v56.16zm472.94 0v-5.28c0-9.83-.13-19.67.05-29.5.18-9.48 5.76-14.26 16.06-14.14 8.29.1 13 5.16 13.12 14.19.08 10 0 20 0 30v4.63h7.2v-6.18c.17-9.66.13-19.32.59-29 .44-9.42 5.73-13.89 15.37-13.67 8.4.2 13.47 5.53 13.66 14.55.12 5.66 0 11.33 0 17v17.77c3.36-.63 7.72 2.74 7.72-3.58 0-11 .26-22-.06-33-.37-12.51-8-19.36-20.51-19.57-7.82-.13-13.69 3.26-18.61 9.25-4-6.57-9.88-9-16.94-9.19s-12.72 2.53-17.8 8.11c-.36-2.76-.63-4.8-.89-6.81h-6.48v54.38zM519.6 58.68c5.17-1.79 6.6.38 6.64 4.32.1 9.16.29 18.32.34 27.47 0 7.11-2.31 9.44-9.66 9.54-7 .09-14 .06-21 0-6.64-.05-8.95-2.37-9-9.09-.06-10.33-.41-20.68.14-31 .29-5.58 2.17-11.08 3.36-16.77-3 0-4.79 2.89-6.31 6-3.07 6.39-6.32 12.54-15.81 13.66 6.9 2.75 8 7.19 7.81 12.58-.25 6.16-.19 12.33 0 18.49.2 7.54 2.84 10.21 10.37 10.37s15 .1 22.48 0c7.31 0 14.64 0 21.93-.4 4.37-.26 7-3.11 7-7.6q.18-19.74.11-39.47c0-6-3.45-10.33-7.81-14.41zm-465.12-1.1c5.55-1.52 6.35 1.54 6.4 4.94.13 8.33.09 16.66.09 25 0 6.14-2.24 8.5-8.33 8.59-6.66.09-13.33 0-20 0s-8.48-1.67-8.55-8.62c-.1-9.83-.37-19.67.12-29.48.25-4.92 2-9.77 3.11-14.76-3.37-.31-4.75 3.23-6.2 6.17-2.9 5.83-6 11.21-14.71 12.11 6.75 2.47 7.8 6.61 7.59 11.73-.24 6-.14 12 0 18 .11 5.48 2.54 8.75 8 8.89q20.94.54 41.91 0c5.19-.13 7.76-3.35 7.82-8.49.14-11.83.27-23.66 0-35.48-.14-5.44-3.08-9.78-7.31-13.45zm54.09 161.57h33.28v14.5h7.53c0-11.83.79-23.36-.19-34.72-1.4-16.17-10.92-22.94-28.4-21.77-12.12.81-19.88 10.48-19.93 24.88v31.74h7.72zm511 14.93c0-12 .34-23.31-.18-34.59a25.62 25.62 0 00-3.95-12.09c-5.42-8.38-17-11.5-27.7-8.35-9.72 2.86-15.41 10.3-15.73 21.24-.26 8.65-.09 17.32-.11 26V234h7.81v-14.66h32.4v14.74zm99.83-55.94c-17.22 0-29.47 11.77-29.47 28.3 0 16.83 12.23 28.53 29.78 28.49 17.15 0 29.33-11.92 29.26-28.55s-12.26-28.25-29.53-28.24zm-50.37 37.68c9.62-5.12 12.75-10.75 11.85-20.47-.73-7.81-5.26-13.93-14-15.32-9.87-1.56-20-1.25-30.23-1.76v55.78h7.19V218c10.47-1.58 20.13-2.41 24.89 9.47.37.9 1.23 1.59 1.67 2.47 2.26 4.53 5.87 5.36 10.93 3.81-4.1-6.02-8.09-11.83-12.26-17.93zM245.63 15.93c1.89 1.42 3.8 2.16 4.42 3.5.79 1.7.71 3.88.72 5.86 0 19.83-.05 39.66.06 59.48 0 6.21.37 12.33-6.42 15.3 2.6 1.16 5.43 1.62 7 3.27 2.64 2.87 4.57 6.43 6.65 9.79 1.59 2.58 2.9 5.38 5.58 5.38-1-5.1-2.64-10-2.69-15-.26-28.33-.14-56.65-.12-85 0-6-2.3-10.8-7.06-14.85zM215.13 178v55.6H222v-24.35h33.77v24.52h6.79v-55.38c-6.7-1.31-7-1.13-7 5v18.41h-33.84V178zm592.09 8.77c-8.6-11.1-29.73-11.7-40.85-1.54-12.13 11.07-12.47 30.68-.72 41.85 11.35 10.92 32.41 10.62 41.87-1.2l-4.58-4c-11.57 8.33-24.14 8.24-32 0a22.16 22.16 0 01-2-28.39 21.12 21.12 0 0113.28-8.16c7.82-1.61 14.68.74 20.8 5.89zm-24.39-57.34a65.25 65.25 0 006.87-.71c5.9-1.2 11.35-5.86 11.38-10.27.1-21.3.09-42.61-.19-63.91 0-2.87-1.84-5.73-3-9.21l-15 12.77c6.67-2.1 6.69 1.7 6.71 4.71.13 18.64.08 37.29 0 55.93-.06 4.89-1.7 8.75-6.77 10.73zM178 183.16v50.61h6.91v-50.25c3.55.8 6.44 1.31 9.25 2.12s5.82 2 9 3.11c.81-2 1.51-3.7 2.18-5.36-15.77-8.58-37.32-8.36-48.4.43l2.38 4.91zM498.08 34c4.31 0 6.93-2.59 6.92-6.75 0-4.38-2.86-7.23-7.13-7.16s-7 3-6.9 7.35c.1 4.14 2.74 6.56 7.11 6.56zm92 91.87a7.39 7.39 0 007-6.91c.08-3.91-3.15-7.6-6.8-7.77s-7.13 3.27-7.23 7.25a7.38 7.38 0 006.95 7.42zm24.05-7.33c-.1-4.06-3.44-7.48-7.18-7.35a7.34 7.34 0 00.59 14.67 7.16 7.16 0 006.55-7.33zm134.85.5c.1-4-3-7.65-6.7-7.85s-7.12 3.1-7.22 7.16a7.2 7.2 0 006.84 7.52 7.37 7.37 0 007.04-6.87zM517.15 34.3a6.58 6.58 0 006.85-6.9 7.12 7.12 0 00-7.17-7.27 7 7 0 00-6.83 7.56c.1 4.02 3 6.67 7.15 6.61zM668.63 26c-.08-4.19-3.13-7-7.49-6.93s-6.9 2.73-6.95 6.86 3.1 7.11 7.42 7a6.91 6.91 0 007.02-6.93zM766 118.65c-.05-4.13-3.34-7.57-7.13-7.46s-6.87 3.52-6.73 7.78a6.93 6.93 0 1013.86-.32zM144.76 29.24c.11-3.42-3-6.93-6.38-7.07s-6.83 3.18-7 6.56 3.09 6.84 6.53 7 6.72-3.04 6.85-6.49zM42.55 120c4 .07 6.61-2.45 6.64-6.28s-2.5-6.57-6.33-6.65a6.44 6.44 0 00-6.8 6.31 6.55 6.55 0 006.49 6.62z"
          />
          <path d="M563 0c7.09 7.8 7 17.3 6.93 27.06-.26 22.17-.08 44.34-.08 66.51v6c8.06 0 15.82.33 23.53-.14 3.85-.24 5.9-3.05 5.82-7.35-.19-9.5 0-19-.12-28.5-.08-5.35-1.78-6.43-7-4.6l10.78-16.53c4.92 4.44 8.09 9.38 8.12 16 .05 9.83 0 19.67.07 29.5a48.71 48.71 0 00.89 7.39c.54 3.34 2.67 4.59 6 4.76 16.17.82 16.18.87 16.16-15.39 0-9 .15-18-.15-27-.2-6-2-7.16-7.25-4.83 3.85-5.84 7.35-11.17 11.66-17.73 3.2 5.29 6 10 8.9 14.71 3.47-5.56 10-5 16.41-5 5 .06 10 0 15 .08 9.69.2 14.64 4.2 17.54 14.5-4.06-2.53-4.29-.14-4.28 2.78q0 14-.05 28c-.07 10.83-3.21 14-14 14.11-19.49.15-39 .38-58.49.21-3.16 0-6.31-1.9-9.44-2.92-3.57.92-7.71 2.81-11.89 2.91-15 .38-30 .15-46.65.15 8.34-3.88 7.54-10.34 7.54-16.52v-64a49.47 49.47 0 00-.44-5.95c-.45-3.71-2.09-5.14-6.26-1.87L562 0zm82.9 100.05c8.87 0 17 .25 25.12-.08 5.62-.24 8.9-4 9-10 .18-9.14.15-18.3 0-27.44-.09-5.26-3.23-9.87-8.24-10.46a82.62 82.62 0 00-18.73.1 7.82 7.82 0 00-7.11 7.85c-.19 13.15-.08 26.27-.08 40.03zM719 0c5.92 6.78 7.18 14.71 7 23.53-.41 23.33-.14 46.67-.14 70v6.11c9.09 0 17.85.28 26.58-.12 3.92-.18 6.06-3 6-7.24-.14-9.83-.1-19.67-.33-29.5-.11-4.81-1.38-5.49-6.69-4l10.7-16.37c4.36 4.11 7.8 8.37 7.84 14.42.08 12.84.1 25.67 0 38.51-.05 5.56-2.38 8.23-8.11 8.74-6.29.55-12.63.53-19 .58-11.15.08-22.3 0-34.12-.35 7.16-3.64 6.33-10 6.32-16v-65a24.16 24.16 0 00-.37-5.46c-.71-3-2.25-4.84-6.2-1.71L718 0z" />
          <path d="M806.93 143v8.85H465.49c-2 33.37-16.47 59.47-43.84 78.13-19.94 13.6-42.36 17.65-65.82 14.85-39.33-4.68-80.16-37.05-84-92.67H1.34V143h6.05q129.24 0 258.48.12c5.18 0 6.68-1.52 7.19-6.52 4.2-41.5 39.64-77.86 81-83.43 44.66-6 85.42 16.31 103.37 57.51 3.85 8.84 5.27 18.8 7.32 28.36.61 2.85 1.25 4.23 4.23 4 1.49-.13 3 0 4.5 0h333.45zm-472.75-27.21c-11.19-.28-19.75 4.59-26.61 13.21-10 12.53-9.23 30.1 2 42.52s27.62 15.14 40.83 5c8.73-6.68 15.73-15.6 23.53-23.5 6.51-6.6 12.33-14.18 19.73-19.57 13.76-10 28.48-3 29.58 13.63.47 7.18-1.57 14.12-7.9 18.44-6 4.09-12.57 2.86-18.5-.3a44 44 0 01-9.68-7.7c-4.21-4.16-8.38-5.12-11.66-2.05-3.07 2.86-3 7.26 1.41 11.28 4.84 4.44 9.95 9.18 15.84 11.74 11.21 4.87 22.72 5 32.85-3.48 6.45-5.37 9.83-12.64 11-20.7 2.18-14.9-2.63-30.82-17.18-36.26-14.33-5.36-27.75-2.44-39 7.78-6.85 6.23-12.58 13.68-19 20.44-6 6.39-11.86 13.08-18.54 18.73-6.11 5.17-15 4.43-20.73-.36-7.12-6-9.7-15.31-6.29-22.77 6.9-15.08 24.41-16.83 35.33-3.53 3.66 4.46 7.24 5.39 10.59 2.77 3.63-2.85 3.85-7 .26-11.39-7.04-8.83-16.12-14.13-27.86-13.93z" />
          <path d="M99.12 45c1.1 4.65 2.47 8.08 2.63 11.57.41 9 .24 18 .38 27a62.31 62.31 0 00.63 7c.49 3.8 2.22 5.89 6.57 5.67 6.25-.32 12.53-.08 20.52-.08-7-4.71-6.3-10.67-6.35-16.42 0-4.5.09-9-.26-13.49-.41-5.38-1.24-5.68-5.94-2.89 2.24-9.17 10.88-16.12 20-16.3a143.62 143.62 0 0015.39-.9c2.68-.34 5.22-1.78 9.09-3.19-1.63 2.36-2.46 4.9-4.13 5.74-5.42 2.69-9.45 6.12-9.34 12.62-2.13-1.43-3.68-3-5.54-3.63-5-1.76-8 .47-8 5.67 0 6.34-.28 12.69.12 19a25.54 25.54 0 002.64 8.88c1.77 3.78 4.86 5.27 9.31 5 7.48-.42 15-.24 22.5-.07 3.88.09 5.54-1.67 5.54-5.33 0-8.83.17-17.68-.14-26.5-.09-2.56-1.56-5.08-1.54-5.6l11.9-14c3.9 2.29 8.68 4.84 13.2 7.8 4.34 2.84 5.27 7.55 5.38 12.3.17 8 0 16 0 24 0 5.69 1.32 7.13 6.42 7.24 8.19.19 10.66-1.22 10.7-6.94q.17-33.26 0-66.51c0-5.61-1.65-6.74-6.71-5.14 3.48-5.28 6.72-10.22 10.15-15.41 4.62 4.48 7.6 9.33 7.58 15.78-.06 24 0 48-.05 72 0 6.93-2.35 9.71-9.29 10.4a65 65 0 01-13.94.18c-2.34-.27-4.46-2.46-7.48-4.26l-7 4.67-8.69-7.86c-1.63 7-6.47 7.75-12 7.73-19.84-.07-39.67 0-59.51-.07-3.75 0-7.49-.59-11.42-.92-2.3 6.35 3.05 15.26-5.06 20.17-3.78 2.29-8.41 3.17-13.25 4 7.13-2.44 6.92-8 6.88-13.61-.09-16 0-32 0-48 0-3.26-.26-6.12-5.55-5.61zm94.79 10.1c-5.58-.13-8.66 1.79-8.84 6.28-.36 9-.39 18 .07 27 .09 1.62 3.21 3.08 4.94 4.62 1.28-1.5 3.62-3 3.66-4.51.32-11.14.17-22.28.17-33.39zM8.88 233.85H1.75v-56.16h6.5l.6 6.55c14.54-10.23 26.81-9.71 35.46 1.63 5.24-6.53 12-9.16 20.38-8.82 10.47.44 18.31 6.37 18.88 16.77.73 13.09.18 26.26.18 39.8h-7.6V199.1c0-5.87-1.51-11-7.28-13.65a16.29 16.29 0 00-16.63 1.25c-4.37 2.85-5.57 7.32-5.63 12.12-.12 10.33 0 20.67 0 31 0 1.14-.11 2.29-.18 3.81h-7.56c-.11-1.58-.32-3.33-.33-5.08 0-9.66.07-19.33 0-29-.13-10.51-4.77-15.61-13.94-15.66-9.8-.03-15.6 5.86-15.7 16.11-.09 11.14-.02 22.27-.02 33.85zM481.82 233.82h-7.45v-54.38h6.48c.26 2 .53 4.05.89 6.81 5.08-5.58 10.84-8.29 17.8-8.11s13 2.62 16.94 9.19c4.92-6 10.79-9.38 18.61-9.25 12.51.21 20.14 7.06 20.51 19.57.32 11 .08 22 .06 33 0 6.32-4.36 3-7.72 3.58v-17.78c0-5.67.09-11.34 0-17-.19-9-5.26-14.35-13.66-14.55-9.64-.22-14.93 4.25-15.37 13.67-.46 9.64-.42 19.3-.59 29v6.18h-7.2v-4.63-30c-.08-9-4.83-14.09-13.12-14.19-10.3-.12-15.88 4.66-16.06 14.14-.18 9.83-.05 19.67-.05 29.5zM519.6 58.68l10.61-16.22c4.36 4.08 7.78 8.38 7.81 14.41q.09 19.74-.11 39.47c0 4.49-2.65 7.34-7 7.6-7.29.43-14.62.35-21.93.4-7.49 0-15 .12-22.48 0s-10.17-2.83-10.37-10.37c-.16-6.16-.22-12.33 0-18.49.21-5.39-.91-9.83-7.81-12.58 9.49-1.12 12.74-7.27 15.81-13.66 1.52-3.13 3.3-6.06 6.31-6-1.19 5.69-3.07 11.19-3.36 16.77-.55 10.3-.2 20.65-.14 31 0 6.72 2.34 9 9 9.09 7 .06 14 .09 21 0 7.35-.1 9.71-2.43 9.66-9.54-.05-9.15-.24-18.31-.34-27.47-.06-4.03-1.49-6.2-6.66-4.41zM54.48 57.58l9.89-14.92c4.23 3.67 7.17 8 7.31 13.45.3 11.82.17 23.65 0 35.48-.06 5.14-2.63 8.36-7.82 8.49q-20.94.56-41.91 0c-5.46-.14-7.89-3.41-8-8.89-.11-6-.21-12 0-18 .2-5.12-.85-9.28-7.59-11.72 8.68-.9 11.81-6.28 14.71-12.11 1.45-2.94 2.83-6.48 6.2-6.17-1.1 5-2.86 9.84-3.11 14.76-.49 9.81-.22 19.65-.12 29.48.07 7 1.79 8.59 8.55 8.62s13.33.07 20 0C58.73 96 61 93.65 61 87.51c0-8.33 0-16.66-.09-25-.08-3.39-.91-6.45-6.43-4.93zM108.57 219.15v14.63h-7.72v-12.27-19.47c0-14.4 7.81-24.07 19.93-24.88 17.48-1.17 27 5.6 28.4 21.77 1 11.36.19 22.89.19 34.72h-7.53v-14.5zm-.31-7.14h20c15 0 15.44-.53 12.84-15.51-1.29-7.45-6.74-12.17-14.53-12.59-9.07-.49-15.49 3.28-17.1 11.06-1.06 5.28-.81 10.83-1.21 17.03zM619.61 234.08h-7.46v-14.74h-32.4V234h-7.81v-7.74c0-8.67-.15-17.34.11-26 .32-10.94 6-18.38 15.73-21.24 10.73-3.15 22.28 0 27.7 8.35a25.62 25.62 0 013.95 12.09c.57 11.31.18 22.63.18 34.62zM612 212.16c-.16-9.3 2.28-18.82-6.94-24.91-5.73-3.79-15.3-3.28-20.22 1.1-7.45 6.63-4.81 15.4-5 23.81zM719.44 178.14c17.27 0 29.5 11.67 29.57 28.24s-12.11 28.51-29.26 28.55C702.2 235 690 223.27 690 206.44c0-16.53 12.22-28.29 29.44-28.3zm21.69 28.48c0-12.75-8.86-21.69-21.58-21.72s-21.93 9.11-22 21.53 9.2 21.7 21.79 21.74c12.79.04 21.76-8.82 21.79-21.55zM669.07 215.82c4.17 6.1 8.16 11.91 12.27 17.91-5.06 1.55-8.67.72-10.93-3.81-.44-.88-1.3-1.57-1.67-2.47-4.76-11.88-14.42-11-24.89-9.47v16.07h-7.19v-55.78c10.19.51 20.36.2 30.23 1.76 8.77 1.39 13.3 7.51 14 15.32.93 9.72-2.2 15.35-11.82 20.47zm-25-4.44c6.95-.44 13.43-.37 19.75-1.39s9.6-5.63 9.56-12.06c0-6.25-3.16-10.83-9.31-11.71-6.49-.93-13.14-.76-20-1.08zM245.63 15.93l8.1-12.21c4.76 4 7.07 8.86 7.06 14.85 0 28.33-.14 56.65.12 85 0 4.93 1.73 9.86 2.69 15-2.68 0-4-2.8-5.58-5.38-2.08-3.36-4-6.92-6.65-9.79-1.53-1.65-4.36-2.11-7-3.27 6.79-3 6.46-9.09 6.42-15.3-.11-19.82 0-39.65-.06-59.48 0-2 .07-4.16-.72-5.86-.58-1.4-2.49-2.14-4.38-3.56zM215.13 178h6.59v23.73h33.85v-18.41c0-6.12.28-6.28 7-5v55.38h-6.79v-24.45H222v24.39h-6.87zM807.22 186.81l-4.22 4.41c-6.12-5.15-13-7.5-20.8-5.89a21.12 21.12 0 00-13.2 8.16 22.16 22.16 0 002 28.39c7.87 8.25 20.44 8.34 32 0l4.58 4c-9.52 11.82-30.58 12.12-41.93 1.24-11.75-11.17-11.41-30.78.72-41.85 11.12-10.16 32.25-9.56 40.85 1.54zM782.83 129.47c5.07-2 6.71-5.84 6.72-10.69.05-18.64.1-37.29 0-55.93 0-3 0-6.81-6.71-4.71l15-12.77c1.2 3.48 3 6.34 3 9.21.28 21.3.29 42.61.19 63.91 0 4.41-5.48 9.07-11.38 10.27a65.25 65.25 0 01-6.82.71zM178 183.16l-18.67 5.57-2.38-4.91c11.08-8.79 32.63-9 48.4-.43-.67 1.66-1.37 3.38-2.18 5.36-3.19-1.11-6.06-2.25-9-3.11s-5.7-1.32-9.25-2.12v50.25H178zM498.08 34c-4.37 0-7-2.41-7.11-6.56-.12-4.37 2.62-7.28 6.9-7.35s7.13 2.77 7.13 7.15c0 4.16-2.61 6.76-6.92 6.76zM590 125.86a7.38 7.38 0 01-7-7.43c.1-4 3.53-7.42 7.23-7.25s6.88 3.86 6.8 7.77a7.39 7.39 0 01-7.03 6.91zM614.09 118.53a7.16 7.16 0 01-6.59 7.32 7.34 7.34 0 01-.59-14.67c3.74-.13 7.09 3.29 7.18 7.35zM748.94 119a7.37 7.37 0 01-7.08 6.83 7.2 7.2 0 01-6.84-7.52c.1-4.06 3.42-7.36 7.22-7.16s6.76 3.85 6.7 7.85zM517.15 34.3c-4.18.06-7-2.59-7.16-6.61a7 7 0 016.87-7.56A7.12 7.12 0 01524 27.4a6.58 6.58 0 01-6.85 6.9zM668.63 26a6.91 6.91 0 01-7 6.92c-4.32.12-7.46-2.84-7.42-7s2.74-6.78 6.95-6.86 7.39 2.71 7.47 6.94zM766 118.65a6.93 6.93 0 11-13.86.32c-.14-4.26 2.8-7.67 6.73-7.78s7.03 3.33 7.13 7.46z" />
          <path d="M144.76 29.24c-.13 3.45-3.56 6.69-6.9 6.51s-6.74-3.74-6.53-7 3.78-6.7 7-6.56 6.54 3.63 6.43 7.05zM42.55 120a6.55 6.55 0 01-6.49-6.62 6.44 6.44 0 016.8-6.31c3.83.08 6.36 2.74 6.33 6.65s-2.69 6.34-6.64 6.28z" />
          <path
            className="prefix__cls-1"
            d="M645.86 100.05c0-13.76-.11-26.88.07-40a7.82 7.82 0 017.07-7.84 82.62 82.62 0 0118.73-.1c5 .59 8.15 5.2 8.24 10.46.14 9.14.17 18.3 0 27.44-.12 5.94-3.4 9.72-9 10-8.11.29-16.24.04-25.11.04zM334.18 115.78c11.74-.19 20.78 5.11 27.94 14 3.59 4.44 3.37 8.54-.26 11.39-3.35 2.62-6.93 1.69-10.59-2.77-10.92-13.3-28.43-11.55-35.33 3.53-3.41 7.46-.83 16.79 6.29 22.77 5.7 4.79 14.62 5.53 20.73.36 6.68-5.65 12.5-12.34 18.54-18.73 6.38-6.76 12.11-14.21 19-20.44 11.22-10.22 24.64-13.14 39-7.78 14.55 5.44 19.36 21.36 17.18 36.26-1.18 8.06-4.56 15.33-11 20.7-10.13 8.45-21.64 8.35-32.85 3.48-5.89-2.56-11-7.3-15.84-11.74-4.39-4-4.48-8.42-1.41-11.28 3.28-3.07 7.45-2.11 11.66 2.05a44 44 0 009.68 7.7c5.93 3.16 12.53 4.39 18.5.3 6.33-4.32 8.37-11.26 7.9-18.44-1.1-16.59-15.82-23.63-29.58-13.63-7.4 5.39-13.22 13-19.73 19.57-7.8 7.9-14.8 16.82-23.53 23.5-13.21 10.1-29.59 7.39-40.83-5s-12-30-2-42.52c6.78-8.68 15.35-13.55 26.53-13.28zM193.91 55.1c0 11.11.15 22.25-.17 33.37 0 1.54-2.38 3-3.66 4.51-1.73-1.54-4.85-3-4.94-4.62-.46-9-.43-18-.07-27 .18-4.47 3.26-6.36 8.84-6.26zM108.26 212c.4-6.21.15-11.76 1.25-17 1.61-7.78 8-11.55 17.1-11.06 7.79.42 13.24 5.14 14.53 12.59 2.6 15 2.15 15.51-12.84 15.51zM612 212.16h-32.13c.16-8.41-2.48-17.18 5-23.81 4.92-4.38 14.49-4.89 20.22-1.1 9.19 6.09 6.75 15.61 6.91 24.91zM741.13 206.62c0 12.73-9 21.59-21.78 21.55-12.59 0-21.84-9.27-21.79-21.74s9.38-21.55 22-21.53 21.6 8.97 21.57 21.72zM644.1 211.38v-26.24c6.86.32 13.51.15 20 1.08 6.15.88 9.27 5.46 9.31 11.71 0 6.43-3.13 11-9.56 12.06s-12.8.95-19.75 1.39z"
          />
        </g>
      </g>
    </Box>
  );
};
