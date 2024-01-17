import json


def handle(event, context):
    try:
        request_body = json.loads(event.body)


        if 'number' in request_body:
            # Extract the "number" field from the JSON payload
            input_number = request_body['number']

            # Increment the number by 1
            result = input_number + 1

            # Prepare the response JSON
        response = {
            'statusCode': 200,
            'headers': {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization",
                "Access-Control-Allow-Credentials": "true"
            },
            'body': json.dumps({
                'status': 'ok',
                'result': result
            })
        }
        return response
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',  # Replace with your allowed origin
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                'Access-Control-Allow-Credentials': 'true'
            },
            'body': json.dumps({
                'error': 'Internal Server Error'
            })
        }
