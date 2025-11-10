const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-2 rounded-lg font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-primary text-white hover:shadow-glow',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;