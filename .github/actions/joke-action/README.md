# Joke Action

This action fetches a random joke from the Official Joke API and outputs it.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `joke`

The random joke that was fetched.

## Example usage

```yaml
uses: ./.github/actions/joke-action
with:
  who-to-greet: 'GitHub'
``` 