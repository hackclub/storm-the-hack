import { Box, Button, Card, Container, Grid, Heading, Text, Flex } from 'theme-ui'
import About from '../components/about.mdx'
import Why from '../components/why.mdx'

export default () => (
  <>
  <Flex
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      color: 'white',
      backgroundImage:
          'url(https://i.imgur.com/6yyRG7a.png)',
      backgroundSize: 'background',
      backgroundPosition: 'center',
      py: [5, 6]
    }}
    >
      <Box as="header" 
        sx={{ bg: 'sheet', mb: [4, 5] }}>
        <Container sx={{ 
          py: [4, 5]
        }}>
          <Heading
            as="h3"
            variant="subtitle"
            sx={{ color: 'red', fontSize: [5, 6, 7], mt: 3 }}
          >
            Attention all Hackers!
        </Heading>
          <Heading
            as="h2"
            variant="subtitle"
            sx={{ color: 'muted', mt: 3, mb: 4, fontFamily: 'body' }}
          >
            Mar 26–30, 2020
        </Heading>
          <Button
            as="a"
            href="https://covid-global-hackathon.devpost.com"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mr: [3, 4] }}
          >
            Register
        </Button>
          <Button
            as="a"
            href="https://join.slack.com/t/globalcovidhackathon/shared_invite/zt-d25lrhkl-UAKmMq4h_zNzCQhqnNsbfw"
            variant="outline"
            sx={{ fontSize: [2, 3], px: [3, 4] }}
          >
            Join Slack
        </Button>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>
        <Grid
          columns={[null, null, 2]}
          gap={[3, 4]}
          sx={{
            h2: { mt: 0 },
            p: { maxWidth: 'copy', fontSize: [1, 2], ':last-of-type': { mb: 0 } }
          }}
        >
          <Card>
            <Heading variant="headline" sx={{ color: 'blue' }}>
              We Need Your Help!
          </Heading>
            <About />
          </Card>
          <Card>
            <Heading variant="headline" sx={{ color: 'orange' }}>
              Why?
          </Heading>
            <Why />
          </Card>
        </Grid>
      </Container>

    </Flex>
  </>
)
