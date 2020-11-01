import React, { useState } from 'react';

import { ActionButton } from 'src/components/action_button/action_button';

import './chat_box.scss';

export interface ChatBoxProps {
  onSubmit: (message: string) => void;
}

/** Chat Box component */
export function ChatBox({ onSubmit }: ChatBoxProps): JSX.Element {
  const [message, setMessage] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const submit = () => {
    onSubmit(message);
    setMessage('');
  };

  return (
    <div className='chat-box'>
      <textarea
        className='chat-box__input'
        spellCheck={false}
        rows={1}
        value={message}
        onChange={onChange}
        placeholder={'Say something...'}
      />
      <ActionButton
        label={''}
        isActive={true}
        onClick={submit}
        className={'chat-box__submit-button'}
      />
    </div>
  );
}
