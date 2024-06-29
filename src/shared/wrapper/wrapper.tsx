import './wrapper.css'

interface WrapperProps {
  title: string,
  children: React.ReactNode
}

export const Wrapper = ({ title, children }: WrapperProps): JSX.Element => (
  <>
    <h1>{title}</h1>
    <div className='wrapper'>
      {children}
    </div>
  </>
)