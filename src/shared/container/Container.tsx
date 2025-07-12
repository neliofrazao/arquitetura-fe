import "./container.css";

interface ContainerProps {
  title: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
}

export const Container = ({title, children, actionButton}:ContainerProps) => {
  return (
    <div className="container">
      <div className="container-header">
        <h1>{title}</h1>
        {actionButton}
      </div>
      {children}
    </div>
  );
};
