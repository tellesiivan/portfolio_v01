const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

export default function Project({ id }) {
  return (
    <>
      <div aria-hidden="true" className="relative">
        <img
          src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          alt=""
          className="object-cover object-center w-full h-96"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-main-main" />
      </div>

      <div className="relative px-4 pb-16 mx-auto -mt-12 max-w-7xl sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-common-wht sm:text-4xl">
            Technical Specifications | {id}
          </h2>
          <p className="mt-4 text-text-grey">
            Organize is a system to keep your desk tidy and photo-worthy all day
            long. Procrastinate your work while you meticulously arrange items
            into dedicated trays.
          </p>
        </div>

        <dl className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="pt-8 border-t border-main-borderC"
            >
              <dt className="font-medium text-common-wht ">{feature.name}</dt>
              <dd className="mt-2 text-sm text-text-grey">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
