import React, { Component } from 'react';
import Layout from '../../components/layout';
import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/4/',
    thumbnail: 'http://lorempixel.com/250/150/nature/4/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/5/',
    thumbnail: 'http://lorempixel.com/250/150/nature/5/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/6/',
    thumbnail: 'http://lorempixel.com/250/150/nature/6/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/7/',
    thumbnail: 'http://lorempixel.com/250/150/nature/7/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/8/',
    thumbnail: 'http://lorempixel.com/250/150/nature/8/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/9/',
    thumbnail: 'http://lorempixel.com/250/150/nature/9/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/10/',
    thumbnail: 'http://lorempixel.com/250/150/nature/10/'
  }
];

const Container = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: 'Gilroy';
  text-transform: uppercase;
  font-weight: 900;
  margin: 140px 0 0;
`;

const Subtitle = styled.h2`
  display: inline-block;
  font-size: 32px;
  font-family: 'roboto mono';
  text-transform: uppercase;
  font-weight: 300;
  background: #000;
  color: #fff;
  padding: 4px 8px;
  margin: 0 0 140px;
`;

const Block = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`;

const BlockTitle = styled.h3`
  font-family: 'Gilroy';
  font-size: 18px;
  padding-bottom: 4px;
`;
const BlockText = styled.p`
  font-family: 'roboto mono';
  font-size: 16px;
  max-width: 100ch;
`;

const Gallery = styled(ImageGallery)`
  padding-top: 100px;
`;

const Spacer = styled.div`
  height: 100px;
`;

class HongKongPage extends Component {
  render() {
    return (
      <Layout>
        <Container>
          <Title>Hong Kong & Seoul</Title>
          <Subtitle>Amazing time with friends and lots of food :)</Subtitle>
          <Block>
            <BlockTitle>What did we do yo!</BlockTitle>
            <BlockText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae veniam quidem ab, harum provident
              ut quam mollitia fugiat consequatur quos nostrum magni expedita molestiae veritatis aspernatur! Eveniet,
              ut est reprehenderit aliquam quis necessitatibus tempore nisi illum in quam omnis voluptas obcaecati,
              eligendi non sapiente pariatur. Libero tempore sequi ipsam eaque placeat illum ipsa nulla eius voluptatem
              vero, nobis doloribus velit est beatae esse quis suscipit, ut impedit! Corrupti, ullam. Quae asperiores
              quos architecto, accusantium iste similique eius dignissimos perferendis debitis deleniti porro iure ut
              eum aspernatur. In odio assumenda repudiandae nam illo sit quo blanditiis, minima ducimus, ab odit!
            </BlockText>
          </Block>
          <Spacer />
          <Gallery items={images} />
          <Block>
            <BlockTitle>What did we do yo!</BlockTitle>
            <BlockText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae veniam quidem ab, harum provident
              ut quam mollitia fugiat consequatur quos nostrum magni expedita molestiae veritatis aspernatur! Eveniet,
              ut est reprehenderit aliquam quis necessitatibus tempore nisi illum in quam omnis voluptas obcaecati,
              eligendi non sapiente pariatur. Libero tempore sequi ipsam eaque placeat illum ipsa nulla eius voluptatem
              vero, nobis doloribus velit est beatae esse quis suscipit, ut impedit! Corrupti, ullam. Quae asperiores
              quos architecto, accusantium iste similique eius dignissimos perferendis debitis deleniti porro iure ut
              eum aspernatur. In odio assumenda repudiandae nam illo sit quo blanditiis, minima ducimus, ab odit!
            </BlockText>
          </Block>
          <Spacer />
          <Gallery items={images} />
          <Block>
            <BlockTitle>What did we do yo!</BlockTitle>
            <BlockText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam beatae veniam quidem ab, harum provident
              ut quam mollitia fugiat consequatur quos nostrum magni expedita molestiae veritatis aspernatur! Eveniet,
              ut est reprehenderit aliquam quis necessitatibus tempore nisi illum in quam omnis voluptas obcaecati,
              eligendi non sapiente pariatur. Libero tempore sequi ipsam eaque placeat illum ipsa nulla eius voluptatem
              vero, nobis doloribus velit est beatae esse quis suscipit, ut impedit! Corrupti, ullam. Quae asperiores
              quos architecto, accusantium iste similique eius dignissimos perferendis debitis deleniti porro iure ut
              eum aspernatur. In odio assumenda repudiandae nam illo sit quo blanditiis, minima ducimus, ab odit!
            </BlockText>
          </Block>
        </Container>
      </Layout>
    );
  }
}

export default HongKongPage;