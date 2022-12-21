import styled from '@emotion/styled';
import { css } from '@emotion/react';

import boss from '../assets/lumbergh.jpeg';

const ChatBubble = styled.div`
  position: absolute;
  top: 0;
  left: 440px;
  height: auto;
  width: calc(80vw - 440px);
  max-width: 900px;
  min-width: 200px;
`;

const Bubble = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding: 0.1rem 2rem;
  background: white;
  color: black;
  display: block;
  margin: 0;
  border-radius: 20px;
  font-size: 1.25em;
  line-height: 1.2em;
  border: 4px solid black;
  z-index: 10;
`;

const BubblePointer = styled.div`
  position: absolute;
  height: 40px;
  width: 40px;
  background: ivory;
  transform: rotate(135deg);
  border-radius: 0 0 12px 0;
  left: -20px;
  top: 200px;
  border-right: 4px solid black;
  border-bottom: 4px solid black;
  z-index: 15;
`;

export const Instructions: React.FC<unknown> = () => {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <h1>TPS Reports Instructions</h1>
      <img
        src={boss}
        alt="Mr. Lumberg"
        css={css`
          margin-bottom: 10px;
        `}
      />
      <ChatBubble>
        <Bubble>
          <p>
            Hey there... whaaaat&apos;s happenin&apos;? Yeeeeeah, I&apos;m gonna
            need you to go ahead and improve this application. I need some
            enhancements urgently. And while you are in our codebase, there are
            a few issues that need addressed. Peter and the boys are tied up
            with the Y2K project, so I need you to find what you can. I&apos;ll
            give you a few hints, but you&apos;ll have to figure out the rest.
          </p>
          <h2
            css={css`
              padding: 0px;
              margin-bottom: 0.25em;
            `}
          >
            Primary Task
          </h2>
          <p
            css={css`
              margin: 0;
              padding: 0px;
            `}
          >
            As you know, we have a lot of management on staff. Some employees
            have as many as 8 bosses. Your primary task is to enahance our TPS
            Report Builder to allow me to edit and remove items. That way I can
            make sure they are correct before they are sent out to everyone and
            not seem so incompetent!
          </p>

          <h2
            css={css`
              padding: 0;
              margin: 0;
              margin-top: 0.5em;
              margin-bottom: 0.25em;
            `}
          >
            Bonus Pay
          </h2>
          <ul
            css={css`
              margin-top: 0;
            `}
          >
            <li>
              I seem to remember that Peter told me on the last TPS Report that
              the links in the masthead used to underline or change color or
              something when the link for the current page was active. Do
              whatever you want there, I trust your judgement. Maybe check out
              the React Router docs?
            </li>
            <li>
              I also noticed the site doesn&apos;t perform as well as it used to
              since Samir introduced Hooks into the codebase.
            </li>
            <li>
              Also, Michael has had problems with attention to detail and coding
              standards. I thought he would have learned when he misplaced a
              decimal point that time he was trying to take fractions of a penny
              from every transaction Initech made, but I guess not. He could use
              a little help if you have time.
            </li>
            <li>
              I thought our masthead used to be sticky at the top of the site,
              but maybe I&apos;m just confusing that with Milton Waddams&apos;
              attachment to his stapler. Time to call the Bobs.
            </li>
          </ul>
          <p>Good luck!</p>
        </Bubble>
        <BubblePointer />
        <div
          css={css`
            position: relative;
            left: -150px;
          `}
        >
          <h1>Guidelines</h1>
          <p
            css={css`
              font-size: 1.2rem;
            `}
          >
            Unlike Mr. Lumbergh, we don&apos;t want you to spend too much time
            on this - especially not Saturdays! We want to stress that there is
            not one correct answer. We are just looking to see how you implement
            features in an existing codebase and how you work with finding,
            fixing and refactoring code. We are looking for:
          </p>
          <ul
            css={css`
              font-style: italic;
            `}
          >
            <li>
              your command of <code>React</code> concepts
            </li>
            <li>your attention to detail</li>
            <li>how you choose implement new features</li>
            <li>
              how you investigate and find issues in the code (defects and
              performance)
            </li>
            <li>how you choose to refactor code</li>
            <li>consistency in how you code when doing all of the above</li>
          </ul>
          <h2>Please Feel Free To:</h2>
          <ul
            css={css`
              font-style: italic;
            `}
          >
            <li>
              bring in any NPM libraries you deem necessary to complete the
              exercise
            </li>
            <li>
              refactor any code you see fit to make it more readable,
              consistent, stable, etc.
            </li>
            <li>
              use any online resources that are helpful to completing the
              exercise
            </li>
          </ul>
          <h2>Please Do Not:</h2>
          <ul
            css={css`
              font-style: italic;
            `}
          >
            <li>
              be dishonest - using Google to find answers is fine, but please do
              not copy and paste code from other sources.
            </li>
            <li>
              change the existing API endpoints, but feel free to add new ones.
            </li>
            <li>
              feel like you need to spend an inordinate amount of time on this
              exercise. If you accomplish the primary task, there is no penalty
              for stopping there - you have your 15 pieces of flair. Some people
              like to wear more flair than the minimum, and we encourage that -
              As long as you feel like more flair will show us something we
              might not otherwise have discovered about your skill set.
            </li>
          </ul>
        </div>
      </ChatBubble>
    </div>
  );
};
