const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseStyles = 'bg-surface rounded-xl p-6';
  const hoverStyles = hover ? 'hover:shadow-subtle transition-shadow duration-300' : '';

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;