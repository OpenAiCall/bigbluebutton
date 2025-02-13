import React from 'react';
import PropTypes from 'prop-types';
import injectWbResizeEvent from '/imports/ui/components/presentation/resize-wrapper/component';
import Styled from './styles';

const COLORS = [
  'default', 'primary', 'danger', 'success',
];

const propTypes = {
  color: PropTypes.string,
};

const NotificationsBar = ({
  color = 'default',
  children,
  alert,
}) => {
  const hasColor = COLORS.includes(color);

  return (
    <Styled.NotificationsBar
      data-test="notificationBannerBar"
      role={alert ? 'alert' : ''}
      aria-live="off"
      style={
        !hasColor ? {
          backgroundColor: `${color}`,
        } : {}
      }
      color={color}
    >
      {children}
    </Styled.NotificationsBar>
  );
};

NotificationsBar.propTypes = propTypes;

export default injectWbResizeEvent(NotificationsBar);
