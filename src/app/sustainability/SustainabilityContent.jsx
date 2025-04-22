import Certifications from "./components/certifications";
import HeroSustainability from "./components/hero-sustainability";
import ProductCarbonFootprint from "./components/product-carbon-footprint";

export default function SustainabilityContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSustainability />
      <ProductCarbonFootprint />
      <Certifications />

    </div>
  );
}
