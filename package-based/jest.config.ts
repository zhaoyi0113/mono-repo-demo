import { getJestProjects } from '@nx/jest';

console.log('getJestProjects:', getJestProjects());

export default {
  projects: getJestProjects(),
};
