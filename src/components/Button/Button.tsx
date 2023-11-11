import './Button.css'

type TName = string;

interface INameProps {
    name: TName,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Button = ({ name, onClick }: INameProps) => {

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
  }

  return (
    <button onClick={handleClick} type='button' className='button'>{name}</button>
  )
}
