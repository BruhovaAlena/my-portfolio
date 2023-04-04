import {
  SiJavascript,
  SiTypescript,
  SiGithub,
  SiReact,
  SiReactquery,
  SiGit,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiPrisma,
  SiExpress,
  SiChakraui,
  SiStyledcomponents,
  SiPostgresql,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { RestIcon } from '../icons/restIcon';

export enum IconName {
  GITHUB = 'github',
  TYPESCRIPT = 'typescript',
  JAVASCRIPT = 'javascript',
  REACT = 'react',
  REACT_NATIVE = 'reactNative',
  GIT = 'git',
  FIREBASE = 'firebase',
  EXPRESS = 'express',
  REACT_QUERY = 'react_query',
  CSS = 'css',
  HTML = 'html',
  PRISMA = 'prisma',
  CHAKRA = 'chakra',
  STYLED = 'styled',
  NODEJS = 'nodejs',
  POSTGRES = 'postgres',
  REST = 'rest',
}

export const IconMapper = {
  [IconName.GITHUB]: SiGithub,
  [IconName.TYPESCRIPT]: SiTypescript,
  [IconName.JAVASCRIPT]: SiJavascript,
  [IconName.REACT]: SiReact,
  [IconName.REACT_NATIVE]: TbBrandReactNative,
  [IconName.GIT]: SiGit,
  [IconName.REACT_QUERY]: SiReactquery,
  [IconName.FIREBASE]: SiFirebase,
  [IconName.EXPRESS]: SiExpress,
  [IconName.CSS]: SiCss3,
  [IconName.HTML]: SiHtml5,
  [IconName.PRISMA]: SiPrisma,
  [IconName.CHAKRA]: SiChakraui,
  [IconName.STYLED]: SiStyledcomponents,
  [IconName.NODEJS]: FaNodeJs,
  [IconName.POSTGRES]: SiPostgresql,
  [IconName.REST]: RestIcon,
};
