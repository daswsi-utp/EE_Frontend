import Certifications from "./components/certifications";
import EnvironmentalImpact from "./components/environmental-impact";
import HeroSustainability from "./components/hero-sustainability";
import ProductCarbonFootprint from "./components/product-carbon-footprint";

export default function SustainabilityContent() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-100">
      <HeroSustainability />
      <ProductCarbonFootprint />
      <Certifications />
      <EnvironmentalImpact />
    </div>
  );
}
