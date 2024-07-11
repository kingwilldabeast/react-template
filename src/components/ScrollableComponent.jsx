const ScrollableComponent = () => {
  return (
    <div className="scrollable-container">
        {/* Your scrollable content here */}
        {Array.from({ length: 50 }).map((_, index) => (
          <p key={index} className="scrollable-item">Scrollable content line {index + 1}</p>
        ))}
    </div>
  );
};

export default ScrollableComponent;
