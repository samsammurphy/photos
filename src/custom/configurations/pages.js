import React from "react";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PhotoAlbumIcon from "@material-ui/icons/PhotoAlbum";
import SchoolIcon from "@material-ui/icons/School";
import DashboardIcon from "@material-ui/icons/Dashboard";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

export const PAGES = {
  map: {
    path: "/",
    label: "Map",
  },
  embeddable: {
    path: "/embeddable",
    label: "Map",
  },
  photos: {
    path: "/photo",
    label: "Photo",
  },
  moderator: {
    path: "/moderator",
    label: "Photo Approval",
    icon: <CheckCircleIcon />,
    visible: (user, online) => user && user.isModerator,
  },
  ownPhotos: {
    path: "/own_photos",
    label: "Own photos",
    icon: <PhotoAlbumIcon />,
    visible: (user, online) => user,
  },
  account: {
    path: "/account",
    label: "Account",
    icon: <AccountCircleIcon />,
    visible: (user, online) => user,
  },
  about: {
    path: "/about",
    label: "About",
    visible: (user, online) => true,
    icon: <HelpIcon />,
  },
  tutorial: {
    path: "/tutorial",
    label: "Tutorial",
    visible: (user, online) => true,
    icon: <SchoolIcon />,
  },
  writeFeedback: {
    path: "/write-feedback",
    label: "Feedback",
    visible: (user, online) => true,
    icon: <FeedbackIcon />,
  },
  welcome: {
    path: "/welcome",
    label: "welcome",
    visible: (user, online) => true,
    icon: <SchoolIcon />,
  },
  leaderboard: {
    path: "/leaderboard",
    label: "Leaderboard",
    visible: (user, online) => true,
    icon: <DashboardIcon />,
  },
  feedbackReports: {
    path: "/feedback-reports",
    label: "Feedback Reports",
    icon: <LibraryBooksIcon />,
    visible: (user, online) => user && user.isModerator,
  },
  feedbackDetails: {
    path: "/feedback-details",
    label: "Feedback Details",
  },
  displayPhoto: {
    path: "/photos",
    label: "photos",
  },
};