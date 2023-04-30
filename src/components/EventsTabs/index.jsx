import styles from "./styles.module.scss";

const eventsOptions = [
  {
    label: "All events",
    value: "all",
  },
  // {
  //   label: "Featured",
  //   value: "featured",
  // },
  // {
  //   label: "Trending",
  //   value: "trending",
  // },
  // {
  //   label: "Best Selling",
  //   value: "bestSelling",
  // },
  // {
  //   label: "Events on Sale",
  //   value: "eventsOnSale",
  // },
];

const { eventTabsContainer, eventTabsList, eventTabOption, active } = styles;

const EventTabs = ({ onTabChange = () => {}, currentTab = "all" }) => {
  return (
    <div className={eventTabsContainer}>
      <ul className={eventTabsList}>
        {eventsOptions.map((option) => (
          <li
            className={`${eventTabOption} ${
              currentTab === option.value ? active : null
            } `}
            key={option.value}
            onClick={() => onTabChange(option.value)}
          >
            {" "}
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTabs;
