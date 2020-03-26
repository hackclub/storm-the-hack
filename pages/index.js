import { Box, Button, Card, Container, Grid, Heading, Text, Flex, Image } from 'theme-ui'
import About from '../components/about.mdx'
import Why from '../components/why.mdx'
import Signature from '../components/signature.mdx'
import Mail from '../components/mail.mdx'
import Signup from '../components/signup.mdx'
import Slack from '../components/slack.mdx'
import Suit from '../components/suit.mdx'
import Rally from '../components/rally.mdx'

export default () => (
  <>
    <Container sx={{ textAlign: 'center' }}>
      {/* <Image src="/background.png" />
      <Image src="/poster-front.png" /> */}
      <Image src="/poster-full.png" sx={{ maxHeight: '100vh' }} />
    </Container>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundImage: "url(background.png)",
        backgroundSize: "100%",
        // backgroundRepeat: 'no-repeat',
        pt: [5, 6]
      }}
    >
      <Box as="header" 
        sx={{ bg: 'sheet', mb: [4, 5] }}>
        <Container sx={{ 
          py: [0, 0]
        }}>
          <Heading
            as="h2"
            variant="subtitle"
            sx={{ color: '#ff3300', fontSize: [5, 6, 7], mt: [3, 4] }}
          >
            Hackers Assemble!
          </Heading>
          <Heading
            as="h2"
            variant="subtitle"
            sx={{ color: 'muted', mt: 3, mb: 4, fontFamily: 'body', fontSize: [2, 3, 4] }}
          >
            Thursday–Monday 9AM–9AM Pacific
          </Heading>
          <Heading
            as="h2"
            variant="subtitle"
            sx={{ color: 'snow', mt: 3, mb: 4, fontFamily: 'body', fontSize: [2, 3, 4], fontWeight: "bold" }}
          >
            Hack Club is storming the COVID-19 Global Hackathon, a worldwide event with the staff of Facebook, Giphy, Microsoft, Pinterest, Slack, TikTok, WeChat, and Twitter.
          </Heading>
          <Button
            as="a"
            href="https://www.facebook.com/zuck/posts/10111707674548151"
            variant="outline"
            sx={{ fontSize: [2, 3], px: [3, 4], mb: [4, 5] }}
          >
            Read Mark Zuckerberg’s Post
        </Button>
      </Container>
      <Container sx={{ pt: 1, pb: 5, px: [2, 4, 5] }}>
        <Grid
          columns={[null, null, 2]}
          rows={[null, null, 2]}
          gap={[3, 4]}
          sx={{
            h2: { mt: 0 },
            p: {
              maxWidth: "copy",
              fontSize: [1, 2],
              ":last-of-type": { mb: 0 }
            }
          }}
        >
        <Card>
          <Heading variant="headline" sx={{ color: "orange" }}>
            Join the Storm
          </Heading>
          <Signup/>
          <Button
            as="a"
            href="https://hack.af/cgh"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "orange", alignSelf: "end" }}
          >
            1. SIGN UP
          </Button>
        </Card>
        <Card>
          <Heading variant="headline" sx={{ color: "#ff3300" }}>
            Don the Uniform
          </Heading>
          <Suit/>
          <Button
            as="a"
            href="https://hack.af/suitup"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "#ff3300", alignSelf: "end" }}
          >
            2. SUIT UP
          </Button>
        </Card>
        <Card>
          <Heading variant="headline" sx={{ color: "red" }}>
            Enter the Chat
          </Heading>
          <Slack/>
          <Button
            as="a"
            href="https://hack.af/storm-slack"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "red", alignSelf: "end" }}
          >
            3. JOIN SLACK
          </Button>
        </Card>
        <Card>
          <Heading variant="headline" sx={{ color: "dd4411" }}>
            Call The Troops
          </Heading>
          <Mail/>
          <Button
            as="a"
            href="https://hack.af/storm-troops"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "dd4411", alignSelf: "end" }}
          >
            4. MAIL OUT
          </Button>
        </Card>
        </Grid>

        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            pt: [2, 3]
          }}
        >
          <Rally /> 
        </Flex>
      </Container>
    </Flex>
  </>
);
