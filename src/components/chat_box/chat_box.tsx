import React from 'react';

import { ActionButton } from 'src/components/action_button/action_button';

import './chat_box.scss';

export interface ChatBoxProps {
  onSubmit: (message: string) => void;
  onInputChange: (message: string) => void;
  userInput: string;
}

/** Chat Box component */
export function ChatBox({
  onSubmit,
  userInput,
  onInputChange,
}: ChatBoxProps): JSX.Element {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInputChange(e.target.value);
  };
  const submit = () => {
    onSubmit(userInput);
  };

  return (
    <div className='chat-box'>
      <textarea
        className='chat-box__input'
        spellCheck={false}
        rows={1}
        value={userInput}
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
