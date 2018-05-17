// @flow
import React from 'react';
import ContentLayout from 'layouts/ContentLayout';
import lifecycle from 'containers/LifecycleContainer';
import { secured } from 'routes/Auth/util/wrappers';
import { initAppContent } from 'modules/AppModule';

export const InitializedContentLayout = lifecycle(ContentLayout, { componentWillMount: initAppContent });

export const HomeLayoutComponent = ({ children }) => (
  <InitializedContentLayout>
    { children }
  </InitializedContentLayout>
);

export default HomeLayoutComponent;
