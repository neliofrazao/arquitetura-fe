import "./container.css";

interface ContainerProps {
  title: string;
  children: React.ReactNode;
  actionButton?: React.ReactNode; // ? - Tornar o actionButton opcional
  // O actionButton pode ser um elemento React, como um botão ou link
}

export const Container = ({title, children, actionButton}:ContainerProps) => {
  return (
    <div className="container">
      <div className="container-header">
        <h1>{title}</h1>
        {/* Caso o actionButton não seja passado elé considerado como undefined, undefined é um false natural */}
        {actionButton ? <div id="action-button">{actionButton}</div> : null}
      </div>
      {children}
    </div>
  );
};
