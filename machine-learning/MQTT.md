### What is MQTT?

- MQ Telemetry Transport;
- Lightweight publish / subscribe protocol;
- Designed for resource-constrained devices & low-bandwidth, especially IoT;
- Typically used with port 1883;

### Publish-Subscribe Archictures

- Publisher: Publish a message to a topic;
- Subscriber: Listen on a topic
- Broker(server): Router messages published on a toic to any of that topic's subscribers

### Basics of MQTT in Python

- paho-mqtt library
- Connect to client using IP address and port of broker
- Publish or subscribe to topics from the client
- Publishing requires topic name, dumping message to JSON
- Subscribing just requires topic name
