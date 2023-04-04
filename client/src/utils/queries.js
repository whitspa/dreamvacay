import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($activities: [ID]!) {
    checkout(activities: $activities) {
      session
    }
  }
`;

export const QUERY_ALL_ACTIVITIES = gql`
  query getActivities {
    getActivities {
      _id
      name
      description
      activityDate
      price
      quantity
    }
  }
`;

export const QUERY_PROFILE = gql`
  query getProfile {
    getProfile {
      firstName
      lastName
      email
      savedActivities {
        _id
        name
        activityDate
        price
      }
    }
  }
`;
