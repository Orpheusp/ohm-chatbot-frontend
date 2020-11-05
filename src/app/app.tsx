import React from 'react';

import { AppHeader } from 'src/components/app_header/app_header';
import { ChatPaneContainer } from 'src/components/chat_pane/chat_pane_container';
import { ChatBoxContainer } from 'src/components/chat_box/chat_box_container';
import { TutorialCardData } from 'src/datatypes';
import { TutorialCard } from 'src/components/tutorial_card/tutorial_card';

export interface AppState {
  activeTutorial?: TutorialCardData;
  activeTutorialStep?: number;
  isActiveTutorialForwardConditionMet?: boolean;
}

export class App extends React.Component<unknown, AppState> {
  state: AppState;

  constructor(props: unknown) {
    super(props);

    this.state = {};
    this.enterTutorial = this.enterTutorial.bind(this);
    this.exitTutorial = this.exitTutorial.bind(this);
    this.continueTutorial = this.continueTutorial.bind(this);
  }

  private enterTutorial(tutorial: TutorialCardData) {
    if (!tutorial.resources.length) {
      return;
    }
    this.setState({
      activeTutorial: tutorial,
      activeTutorialStep: 0,
      isActiveTutorialForwardConditionMet: true,
    });
  }

  private exitTutorial() {
    this.setState({
      activeTutorial: undefined,
      activeTutorialStep: undefined,
      isActiveTutorialForwardConditionMet: undefined,
    });
  }

  private continueTutorial() {
    const {
      activeTutorial,
      activeTutorialStep,
      isActiveTutorialForwardConditionMet,
    } = this.state;

    if (
      !activeTutorial ||
      activeTutorialStep === undefined ||
      !activeTutorial.resources.length ||
      activeTutorialStep === activeTutorial.resources.length - 1 ||
      !isActiveTutorialForwardConditionMet
    ) {
      return;
    }
    // eslint-disable-next-line no-invalid-this
    this.setState({
      activeTutorial: activeTutorial,
      activeTutorialStep: activeTutorialStep + 1,
      isActiveTutorialForwardConditionMet: true,
    });
  }

  render(): JSX.Element {
    const {
      activeTutorial,
      activeTutorialStep,
      isActiveTutorialForwardConditionMet,
    } = this.state;
    if (
      activeTutorial &&
      activeTutorialStep !== undefined &&
      isActiveTutorialForwardConditionMet !== undefined
    ) {
      return (
        <div className={'app'}>
          <AppHeader onToggleHeader={() => {}} />
          <TutorialCard
            data={activeTutorial}
            completeTutorial={this.exitTutorial}
            continueTutorial={this.continueTutorial}
            cancelTutorial={this.exitTutorial}
            currentStep={activeTutorialStep}
            isForwardConditionMet={isActiveTutorialForwardConditionMet}
          />
        </div>
      );
    }

    return (
      <div className={'app'}>
        <AppHeader onToggleHeader={() => {}} />
        <ChatPaneContainer enterTutorial={this.enterTutorial} />
        <ChatBoxContainer />
      </div>
    );
  }
}
