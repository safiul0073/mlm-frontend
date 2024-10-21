import { PackageType, PurchaseType, RewardUserType, SliderType } from ".";

export interface HomePageDataTypes {
  packages: PackageType[];
  slider: SliderType;
  reward_users: RewardUserType[];
  latest_withdrawals: any;
  latest_purchases: PurchaseType[];
}
