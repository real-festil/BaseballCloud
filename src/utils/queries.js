import { gql } from "apollo-boost";

export const GET_CURRENT_PROFILE = gql`
  {
    current_profile {
      id
      first_name
      last_name
      position
      position2
      avatar
      throws_hand
      bats_hand
      biography
      school_year
      feet
      inches
      weight
      age
      school {
        id
        name
      }
      teams {
        id
        name
      }
      facilities {
        id
        email
        u_name
      }
    }
  }
`;

export const UPDATE_CURRENT_PROFILE = gql`
  mutation UpdateProfile($form: UpdateProfileInput!) {
    update_profile(input: $form) {
      profile {
        id
        first_name
        last_name
        position
        position2
        avatar
        throws_hand
        bats_hand
        biography
        school_year
        feet
        inches
        weight
        age
        recent_events {
          id
          event_type
          event_name
          date
          recent_avatars {
            id
            first_name
            last_name
            avatar
          }
        }
        school {
          id
          name
        }
        teams {
          id
          name
        }
        facilities {
          id
          email
          u_name
        }
      }
    }
  }
`;

export const GET_FACILITIES = gql`
  query Facilities($search: String!) {
    facilities(search: $search) {
      facilities {
        id
        email
        u_name
      }
    }
  }
`;

export const GET_SCHOOLS = gql`
  query Schools($search: String!) {
    schools(search: $search) {
      schools {
        id
        name
      }
    }
  }
`;

export const GET_TEAMS = gql`
  query Teams($search: String!) {
    teams(search: $search) {
      teams {
        id
        name
      }
    }
  }
`;

export const GET_PROFILE = gql`
  query ProfileNames($input: FilterProfileNamesInput!) {
    profile_names(input: $input) {
      profile_names {
        id
        position
        first_name
        last_name
        inches
        feet
        weight
        age
      }
    }
  }
`;

export const GET_PROFILE_BY_ID = gql`
  query Profile($id: String!) {
    profile(id: $id) {
      id
      first_name
      last_name
      position
      position2
      school_year
      avatar
      throws_hand
      bats_hand
      biography
      feet
      inches
      weight
      age
      recent_events {
        id
        event_type
        event_name
        date
        is_pitcher
        data_rows_count
        recent_avatars {
          id
          first_name
          last_name
          avatar
        }
      }
      winsgspan
      grip_right
      grip_left
      wrist_to_elbow
      broad_jump
      grip_left
      act_score
      gpa_score
      sat_score
      batting_top_values {
        pitch_type
        distance
        launch_angle
        exit_velocity
      }
      pitching_top_values {
        velocity
        spin_rate
        pitch_type
      }
      pitcher_summary {
        velocity
        spin_rate
        horizontal_break
      }
      batter_summary {
        exit_velocity
        distance
        launch_angle
      }
      school {
        id
        name
      }
      teams {
        id
        name
      }
      facilities {
        id
        email
        u_name
      }
      favorite
      events_opened
      paid
    }
  }
`;

export const GET_LEADERBOARD_BATTING = gql`
  query LeaderboardBatting($input: FilterLeaderboardInput!) {
    leaderboard_batting(input: $input) {
      leaderboard_batting {
        batter_name
        exit_velocity
        launch_angle
        distance
        batter_datraks_id
        age
        school {
          id
          name
        }
        teams {
          id
          name
        }
        favorite
      }
    }
  }
`;

export const GET_LEADERBOARD_PITCHING = gql`
  query LeaderboardPitching($input: FilterLeaderboardInput!) {
    leaderboard_pitching(input: $input) {
      leaderboard_pitching {
        pitcher_name
        pitch_type
        velocity
        spin_rate
        vertical_break
        horizontal_break
        pitcher_datraks_id
        age
        school {
          id
          name
        }
        teams {
          id
          name
        }
        favorite
      }
    }
  }
`;
