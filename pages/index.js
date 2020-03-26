import { Box, Button, Card, Container, Grid, Heading, Text, Flex, Image, Link } from 'theme-ui'
import Mail from '../components/mail.mdx'
import Signup from '../components/signup.mdx'
import Slack from '../components/slack.mdx'
import Suit from '../components/suit.mdx'

export default () => (
  <>
    <Container sx={{ textAlign: 'center' }}>
      <Image src="/poster-full.png" sx={{ maxHeight: '100vh' }} />
    </Container>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundImage: "url(background.png)",
        backgroundSize: "100%",
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
            href="https://hack.af/zuck"
            variant="outline"
            sx={{ fontSize: [2, 3], px: [3, 4], mb: [4, 5] }}
          >
            Read Mark Zuckerberg’s Post
        </Button>
      </Container>
      </Box>
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
          <Flex sx={{ flexDirection: "column", height: '100%', justifyContent: "space-between" }}>
            <Box>
              <Heading variant="headline" sx={{ color: "orange" }}>
                1. Join the Storm
              </Heading>
              <Signup/>
            </Box>
          <Button
            as="a"
            href="https://hack.af/cgh"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "orange", alignSelf: "end" }}
          >
            SIGN UP
          </Button>
          </Flex>
        </Card>
        <Card>
          <Flex sx={{ flexDirection: "column", height: '100%', justifyContent: "space-between" }}>
            <Box>
              <Heading variant="headline" sx={{ color: "#ff3300" }}>
                2. Don the Uniform
              </Heading>
              <Suit/>
            </Box>
            <Button
              as="a"
              href="https://hack.af/suitup"
              sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "#ff3300", alignSelf: "end" }}
            >
              SUIT UP
            </Button>
          </Flex>
        </Card>
        <Card>
          <Flex sx={{ flexDirection: "column", height: '100%', justifyContent: "space-between" }}>
            <Box>
              <Heading variant="headline" sx={{ color: "red" }}>
                3. Enter the Chat
              </Heading>
              <Slack/>
            </Box>
            <Button
              as="a"
              href="https://hack.af/storm-slack"
              sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "red", alignSelf: "end" }}
            >
              JOIN SLACK
            </Button>
          </Flex>
        </Card>
        <Card>
          <Flex sx={{ flexDirection: "column", height: '100%', justifyContent: "space-between" }}>
            <Box>
              <Heading variant="headline" sx={{ color: "#dd2244" }}>
                4. Rally the Troops
              </Heading>
              <Mail/>
            </Box>
            <Button
              as="a"
              href="https://hack.af/barga"
              sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "#dd2244", alignSelf: "end" }}
            >
              MAIL OUT
            </Button>
          </Flex>
        </Card>
        </Grid>

        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            pt: 4
          }}
        >
          <Heading variant="headline" sx={{ color: "snow", mb: 0, fontSize: 5, textAlign: "center"  }}>
            5.&nbsp;Form&nbsp;Up&nbsp;in 
            {/* <Link href="https://hack.af/storm-channel" sx={{ ml: 3, mt: 0, textAlign: "center", fontSize: 5}}>
              #storm-covid-hackathon
            </Link> */}
          </Heading>
          
          <Link href="https://hack.af/storm-channel" sx={{ mt: 0, textAlign: "center" }}>
            <Heading variant="headline" sx={{  mt: 0, fontSize: 5 }}>
              #storm-covid-hackathon
            </Heading>
          </Link>
        </Flex>
      </Container>
    </Flex>
  </>
);
