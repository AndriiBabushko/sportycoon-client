import { gql } from "../__generated__";

export const ME = gql(/* GraphQL */ `
  query ME {
    me {
      id
      email
      username
    }
  }
`);

export const ME_DASHBOARD_LAYOUT = gql(/* GraphQL */ `
  query ME_DASHBOARD_LAYOUT {
    me {
      username
      full_name
    }
  }
`);

export const ME_ACCOUNT_PROFILE = gql(/* GraphQL */ `
  query ME_ACCOUNT_PROFILE {
    me {
      id
      username
      full_name
      email
      gender
      height {
        unit
        value
      }
      weight {
        unit
        value
      }
      goals
      fitness_level
      goal_weight {
        unit
        value
      }
      performance {
        max_dips
        max_pull_ups
        max_push_ups
        max_squats
      }
      spotify_id
      google_id
    }
  }
`);
