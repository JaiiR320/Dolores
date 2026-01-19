import { track } from "@vercel/analytics";

type OrderSource = "home" | "order_page";
type SocialPlatform = "facebook" | "instagram";

export const trackOrderClick = (source: OrderSource) => {
  track("order_click", { source });
};

export const trackReservationClick = () => {
  track("reservation_click");
};

export const trackGiftCardClick = () => {
  track("gift_card_click");
};

export const trackSocialClick = (platform: SocialPlatform) => {
  track("social_click", { platform });
};
