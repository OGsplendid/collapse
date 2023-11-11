import { useState } from 'react'
import { Button } from '../Button/Button'
import { Body } from '../Body/Body'
import './Collapse.css'

export const Collapse = () => {

    const [buttonName, setButtonName] = useState<string>('Развернуть');
    const [body, setBody] = useState<boolean>(true);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const input = e.target as HTMLElement;

        setButtonName(input.textContent === 'Развернуть' ? 'Свернуть' : 'Развернуть');
        setBody(!body);
    }

  return (
    <div className='common-wrapper'>
        <Button name={buttonName} onClick={handleClick} />
        <Body invisible={body} />
    </div>
  )
}
