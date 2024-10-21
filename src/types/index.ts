export interface PackageType {
  name: string;
  slug: string;
  plan_price_type: string;
  plan_price: number;
  min_plan_price: number;
  max_plan_price: number;
  return_interest: number;
  return_interest_type: string;
  return_interest_period_type: string;
  return_interest_period: number;
  return_interest_number_of_period: number;
  show_return_interest: boolean;
  referral_commission: number;
  is_capital_back: boolean;
  status: string;
}

export interface MediaType {
  type: string;
  url: string;
}

export interface SliderType {
  title: string;
  status: string;
  medias: MediaType[];
}

export interface RewardType {
  id: number;
  designation: string;
  travel_destination: string;
  one_time_bonus: string;
  salary: string;
  description: string;
  other_amount: string;
  major_amount: string;
}

export interface RewardUserType {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  image: MediaType;
  reward: RewardType;
  user_reward_count: number;
}

export interface PurchaseType {
  id: number;
  package_id: number;
  net_amount: number;
  created_at: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
  };
  package: PackageType;
}
