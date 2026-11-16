// Old product URLs (before the English names were corrected) keep working via permanent redirects.
const movedProducts = {
  "skyforge-quick-assembly-model-kit-type-3-airplane": "skyforge-quick-build-model-kit-type-3",
  "prefabricated-balsa-wood-skyforge-aircraft-model": "skyforge-balsa-wood-airplane-kit",
  "skyforge-prefab-made-of-epo-foam": "skyforge-epo-foam-airplane-kit",
  "vintage-skyforge-airplane-model": "skyforge-vintage-airplane-model",
  "skyforge-military-aircraft-prefabricated-model": "skyforge-military-aircraft-kit",
  "skyforge-training-aircraft-flight-simulator": "skyforge-trainer-aircraft",
  "skyforge-radio-controlled-wing": "skyforge-rc-flying-wing",
  "skyforge-materials-for-aircraft-modeling-in-assortment": "skyforge-aeromodelling-materials-set",
  "skyforge-fiberglass-fabric": "skyforge-fiberglass-cloth",
  "skyforge-protective-film-for-aircraft-set-3-colors": "skyforge-covering-film-set",
  "skyforge-rubber-wheels-for-rc-aircraft-in-stock": "skyforge-rubber-wheels-for-rc-aircraft",
  "skyforge-carbon-fiber-tube-fabric-wrap-in-stock": "skyforge-carbon-fiber-tube-roll-wrapped",
  "skyforge-carbon-fiber-rods-in-stock": "skyforge-carbon-fiber-rods",
  "push-rods-for-skyforge-servos": "skyforge-servo-pushrods",
  "spare-parts-for-skyforge-aircraft-set": "skyforge-rc-aircraft-spare-parts-set",
  "skyforge-balancing-stand-for-propellers": "skyforge-propeller-balancer",
  "skyforge-tool-for-determining-the-center-of-mass": "skyforge-cg-balancer",
  "skyforge-pressure-gauge-for-steering-surface-monitoring": "skyforge-control-surface-throw-meter",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return Object.entries(movedProducts).map(([from, to]) => ({
      source: `/products/${from}`,
      destination: `/products/${to}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
