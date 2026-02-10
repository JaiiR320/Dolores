import MenuSection from "@/components/MenuSection";

export default function MenuPage() {
  return (
    <>
      <MenuSection
        title="Dinner"
        images={[{ src: "/menu/food.jpeg", alt: "dinner menu" }]}
      />

      <MenuSection
        title="Drinks"
        images={[{ src: "/menu/drink-front.jpeg", alt: "drinks menu" }]}
      />

      <MenuSection
        title="Wine"
        images={[{ src: "/menu/drink-back.jpeg", alt: "wine menu" }]}
      />

      <MenuSection
        title="Brunch"
        images={[
          { src: "/menu/brunch-front.jpeg", alt: "brunch menu front" },
          { src: "/menu/brunch-back.jpeg", alt: "brunch menu back" },
        ]}
      />
    </>
  );
}
