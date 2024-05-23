import { Context } from 'elysia';
import { Base } from '../components/base';
import { Nav } from '../components/nav';

export const Index = async ({ cookie, auth }: Context) => {
  return (
    <Base>
      <div className="p-6 w-full h-full">
        <Nav />
      </div>
    </Base>
  );
};
