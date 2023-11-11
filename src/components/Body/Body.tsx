import './Body.css'

type TInvisible = boolean;

interface IInvisibleProps {
    invisible: TInvisible,
}

export const Body = ({ invisible }: IInvisibleProps) => {
    const extraClass = invisible ? 'invisible' : '';
  return (
    <div className={`body-wrapper ${extraClass}`}>
        <div className='body-container'>
            <p className='body-text'>
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </p>
        </div>
    </div>
  )
}
