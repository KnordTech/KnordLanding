import useReveal from '../hooks/useReveal';

export default function RevealSection({ as: Tag = 'div', className = '', children, ...props }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
