// @flow
import * as React from 'react';
import { default as Menu } from '../MenuNew/MenuNew';
import Popup from '../Popup';
import RenderLayer from '../RenderLayer';
import type MenuItem from '../MenuItem/MenuItem';

type Props = {
  children?: React.ChildrenArray<React.Element<Class<MenuItem>>>,
  menuMaxHeight?: number | string,
  menuWidth?: number | string,
  renderCaption: () => React.Element<*>
};

type State = {
  menuVisible: boolean
};

export default class DropdownMenu extends React.Component<Props, State> {
  state = {
    menuVisible: false
  };

  _captionElement: ?HTMLSpanElement;

  _showMenu = (): void => {
    this.setState({ menuVisible: true });
  };

  _hideMenu = (): void => {
    this.setState({ menuVisible: false });
  };

  _toggleMenu = (): void => {
    this.setState(prevState => ({ menuVisible: !prevState.menuVisible }));
  };

  _handleCaptionClick = (): void => {
    this._toggleMenu();
  };

  _handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Tab') {
      event.preventDefault();
    }

    switch (event.key) {
      case 'Escape':
        this._hideMenu();
        break;

      default:
        break;
    }
  };

  render() {
    return (
      <RenderLayer
        onClickOutside={this._hideMenu}
        onFocusOutside={this._hideMenu}
      >
        <div>
          <span
            onClick={this._handleCaptionClick}
            ref={element => {
              this._captionElement = element;
            }}
            style={{ display: 'inline-block' }}
          >
            {this.props.renderCaption()}
          </span>
          {this._captionElement && (
            <Popup
              anchorElement={this._captionElement}
              positions={[
                'bottom left',
                'bottom right',
                'top left',
                'top right'
              ]}
              opened={this.state.menuVisible}
              margin={5}
              hasShadow
              hasPin
              pinOffset={15}
            >
              <Menu
                hasShadow={false}
                maxHeight={this.props.menuMaxHeight || 'none'}
                onKeyDown={this._handleKeyDown}
              >
                {this.props.children}
              </Menu>
            </Popup>
          )}
        </div>
      </RenderLayer>
    );
  }
}
